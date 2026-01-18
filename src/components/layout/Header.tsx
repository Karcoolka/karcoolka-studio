import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { toggleMobileMenu, closeMobileMenu, setActiveSection } from '../../store/slices/navigationSlice';
import { setLanguage } from '../../store/slices/languageSlice';
import type { Language } from '../../store/slices/languageSlice';
import { useTranslation } from '../../hooks/useTranslation';
import { motion } from 'framer-motion';

// Czech Flag SVG
const CzechFlag = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="24" fill="#11457e"/>
    <polygon points="0,0 36,0 18,12" fill="#ffffff"/>
    <polygon points="0,12 36,12 18,24" fill="#d7141a"/>
  </svg>
);

// British Flag SVG
const BritishFlag = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="24" fill="#012169"/>
    <path d="M0 0L36 24M36 0L0 24" stroke="#ffffff" strokeWidth="2.4"/>
    <path d="M0 0L36 24M36 0L0 24" stroke="#c8102e" strokeWidth="1.6"/>
    <path d="M18 0v24M0 12h36" stroke="#ffffff" strokeWidth="3.2"/>
    <path d="M18 0v24M0 12h36" stroke="#c8102e" strokeWidth="2"/>
  </svg>
);

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const handleNavClick = (path: string) => {
    dispatch(setActiveSection(path));
    dispatch(closeMobileMenu());
  };

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  const navLinks = [
    { path: '/', key: 'nav.home' as const },
    { path: '/about', key: 'nav.about' as const },
    { path: '/services', key: 'nav.services' as const },
    { path: '/portfolio', key: 'nav.portfolio' as const },
    { path: '/contact', key: 'nav.contact' as const },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        expand="lg"
        className="bg-silver-black border-b border-technical-grey"
        variant="dark"
        fixed="top"
        style={{ backgroundColor: '#1A202C' }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-fuschia-pink">
            Karcoolka Studio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => dispatch(toggleMobileMenu())}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={location.pathname === link.path ? 'text-fuschia-pink fw-bold' : 'text-light'}
                >
                  {t(link.key)}
                </Nav.Link>
              ))}
              <div className="d-flex gap-2 ms-3 ps-2 border-start border-technical-grey">
                <motion.button
                  onClick={() => handleLanguageChange('cs')}
                  className="btn p-1 border-0 bg-transparent"
                  style={{
                    opacity: currentLanguage === 'cs' ? 1 : 0.5,
                    filter: currentLanguage === 'cs' ? 'none' : 'grayscale(0.3)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title="Čeština"
                >
                  <CzechFlag size={28} />
                </motion.button>
                <motion.button
                  onClick={() => handleLanguageChange('en')}
                  className="btn p-1 border-0 bg-transparent"
                  style={{
                    opacity: currentLanguage === 'en' ? 1 : 0.5,
                    filter: currentLanguage === 'en' ? 'none' : 'grayscale(0.3)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title="English"
                >
                  <BritishFlag size={28} />
                </motion.button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
}

export default Header;