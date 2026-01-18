export type TranslationKey = 
  // Navigation
  | 'nav.home' | 'nav.about' | 'nav.services' | 'nav.portfolio' | 'nav.contact'
  // Home
  | 'home.hero.title' | 'home.hero.subtitle' | 'home.button.portfolio' | 'home.button.contact'
  | 'home.services.web' | 'home.services.apps' | 'home.services.creations'
  | 'home.services.web.desc' | 'home.services.apps.desc' | 'home.services.creations.desc'
  | 'home.cta.title' | 'home.cta.button'
  // About
  | 'about.title' | 'about.subtitle' | 'about.who.title' | 'about.who.content' | 'about.who.content2'
  | 'about.approach.title' | 'about.approach.content' | 'about.approach.content2'
  | 'about.skills.title' | 'about.skills.tech1' | 'about.skills.tech2' | 'about.skills.tech3'
  | 'about.skills.tech4' | 'about.skills.tech5' | 'about.skills.tech6'
  // Services
  | 'services.title' | 'services.subtitle' | 'services.webservices.title' | 'services.webservices.desc'
  | 'services.webapps.title' | 'services.webapps.desc' | 'services.creations.title' | 'services.creations.desc'
  | 'services.features' | 'services.cta.title' | 'services.cta.content' | 'services.cta.button'
  | 'services.webservices.f1' | 'services.webservices.f2' | 'services.webservices.f3' | 'services.webservices.f4'
  | 'services.webapps.f1' | 'services.webapps.f2' | 'services.webapps.f3' | 'services.webapps.f4'
  | 'services.creations.f1' | 'services.creations.f2' | 'services.creations.f3' | 'services.creations.f4'
  // Portfolio
  | 'portfolio.title' | 'portfolio.subtitle' | 'portfolio.cta.content' | 'portfolio.cta.button'
  | 'portfolio.project1.title' | 'portfolio.project1.desc'
  | 'portfolio.project2.title' | 'portfolio.project2.desc' | 'portfolio.visit'
  // Contact
  | 'contact.title' | 'contact.subtitle' | 'contact.info.title' | 'contact.info.name' | 'contact.info.email'
  | 'contact.info.connect' | 'contact.info.message' | 'contact.info.footer';

export const translations: Record<'cs' | 'en', Record<TranslationKey, string>> = {
  cs: {
    // Navigation
    'nav.home': 'Domů',
    'nav.about': 'O nás',
    'nav.services': 'Služby',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt',
    // Home
    'home.hero.title': 'Karcoolka Studio',
    'home.hero.subtitle': 'Profesionální webové služby, webové aplikace a kreativní webová řešení',
    'home.button.portfolio': 'Zobrazit Portfolio',
    'home.button.contact': 'Kontaktovat',
    'home.services.web': 'Webové služby',
    'home.services.apps': 'Webové aplikace',
    'home.services.creations': 'Webové tvorby',
    'home.services.web.desc': 'Profesionální webové služby šité na míru potřebám vašeho podnikání',
    'home.services.apps.desc': 'Moderní, responzivní webové aplikace vytvořené s nejnovějšími technologiemi',
    'home.services.creations.desc': 'Kreativní a inovativní webová řešení, která vynikají',
    'home.cta.title': 'Připraveni začít svůj projekt?',
    'home.cta.button': 'Kontaktujte mě',
    // About
    'about.title': 'O Karcoolka Studio',
    'about.subtitle': 'Profesionální poskytovatel webových služeb specializující se na vytváření moderních, responzivních webových stránek a aplikací, které pomáhají firmám růst online.',
    'about.who.title': 'Kdo jsme',
    'about.who.content': 'Karcoolka Studio vede Adela Simková, vášnivá webová vývojářka a designérka věnovaná vytváření výjimečných digitálních zážitků.',
    'about.who.content2': 'Kombinujeme technickou odbornost s kreativním designem, abychom dodali webové stránky a aplikace, které nejen vypadají skvěle, ale také výjimečně dobře fungují.',
    'about.approach.title': 'Náš přístup',
    'about.approach.content': 'Každý projekt je jedinečný a věnujeme čas pochopení vašich obchodních cílů a cílové skupiny.',
    'about.approach.content2': 'Používáme moderní technologie a osvědčené postupy, abychom zajistili, že vaše webová stránka je rychlá, bezpečná a poskytuje vynikající uživatelský zážitek na všech zařízeních.',
    'about.skills.title': 'Dovednosti a odbornost',
    'about.skills.tech1': 'React & TypeScript',
    'about.skills.tech2': 'Webový design',
    'about.skills.tech3': 'Responzivní vývoj',
    'about.skills.tech4': 'Moderní UI/UX',
    'about.skills.tech5': 'Optimalizace výkonu',
    'about.skills.tech6': 'Kreativní řešení',
    // Services
    'services.title': 'Naše služby',
    'services.subtitle': 'Komplexní webová řešení šitá na míru potřebám vašeho podnikání',
    'services.webservices.title': 'Webové služby',
    'services.webservices.desc': 'Kompletní webové služby včetně návrhu vlastních webových stránek, vývoje a nasazení. Od jednoduchých landing pages až po složité více stránkové webové stránky.',
    'services.webapps.title': 'Webové aplikace',
    'services.webapps.desc': 'Moderní webové aplikace vytvořené pomocí React a nejnovějších technologií. Škálovatelné, udržovatelné a uživatelsky přívětivé aplikace pro vaše podnikání.',
    'services.creations.title': 'Webové tvorby',
    'services.creations.desc': 'Kreativní a inovativní webová řešení, která vynikají. Jedinečné návrhy a interaktivní zážitky, které zapojují vaše publikum a přinášejí výsledky.',
    'services.features': 'Funkce:',
    'services.cta.title': 'Připraveni začít?',
    'services.cta.content': 'Pojďme prodiskutovat, jak můžeme pomoci uvést vaši vizi v život s profesionálními webovými službami šitými na míru vašim potřebám.',
    'services.cta.button': 'Kontaktujte nás dnes',
    'services.webservices.f1': 'Vlastní design',
    'services.webservices.f2': 'Responzivní rozvržení',
    'services.webservices.f3': 'SEO optimalizace',
    'services.webservices.f4': 'Rychlé načítání',
    'services.webapps.f1': 'React vývoj',
    'services.webapps.f2': 'Správa stavu',
    'services.webapps.f3': 'API integrace',
    'services.webapps.f4': 'Real-time aktualizace',
    'services.creations.f1': 'Kreativní design',
    'services.creations.f2': 'Interaktivní prvky',
    'services.creations.f3': 'Animace a pohyb',
    'services.creations.f4': 'Firemní identita',
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Prozkoumejte některé z našich nedávných webových tvorb',
    'portfolio.cta.content': 'Zajímá vás spolupráce? Pojďme prodiskutovat váš další projekt!',
    'portfolio.cta.button': 'Kontaktovat',
    'portfolio.visit': 'Navštívit stránku',
    'portfolio.project1.title': 'Vodaci Hronov',
    'portfolio.project1.desc': 'Profesionální webové stránky pro místní podnik zobrazující služby a informace',
    'portfolio.project2.title': 'Sea Kayaking',
    'portfolio.project2.desc': 'Webové stránky pro dobrodružnou turistiku s rezervační funkcionalitou',
    // Contact
    'contact.title': 'Kontaktujte nás',
    'contact.subtitle': 'Pojďme prodiskutovat váš projekt a jak můžeme pomoci uvést vaši vizi v život',
    'contact.info.title': 'Kontaktní informace',
    'contact.info.name': 'Jméno',
    'contact.info.email': 'Email',
    'contact.info.connect': 'Propojte se se mnou',
    'contact.info.message': 'Neváhejte mě kontaktovat e-mailem nebo se spojit na LinkedInu. Vždy jsem otevřená diskusi o nových projektech a příležitostech!',
    'contact.info.footer': 'Těším se na vaši zprávu!',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    // Home
    'home.hero.title': 'Karcoolka Studio',
    'home.hero.subtitle': 'Professional Web Services, Web Apps & Creative Web Solutions',
    'home.button.portfolio': 'View Portfolio',
    'home.button.contact': 'Get In Touch',
    'home.services.web': 'Web Services',
    'home.services.apps': 'Web Apps',
    'home.services.creations': 'Web Creations',
    'home.services.web.desc': 'Professional web development services tailored to your business needs',
    'home.services.apps.desc': 'Modern, responsive web applications built with cutting-edge technologies',
    'home.services.creations.desc': 'Creative and innovative web solutions that stand out',
    'home.cta.title': 'Ready to Start Your Project?',
    'home.cta.button': 'Contact Me',
    // About
    'about.title': 'About Karcoolka Studio',
    'about.subtitle': 'Professional web services provider specializing in creating modern, responsive websites and web applications that help businesses grow online.',
    'about.who.title': 'Who We Are',
    'about.who.content': 'Karcoolka Studio is led by Adela Simkova, a passionate web developer and designer dedicated to creating exceptional digital experiences.',
    'about.who.content2': 'We combine technical expertise with creative design to deliver websites and applications that not only look great but perform exceptionally well.',
    'about.approach.title': 'Our Approach',
    'about.approach.content': 'Every project is unique, and we take the time to understand your business goals and target audience.',
    'about.approach.content2': 'We use modern technologies and best practices to ensure your website is fast, secure, and provides an excellent user experience across all devices.',
    'about.skills.title': 'Skills & Expertise',
    'about.skills.tech1': 'React & TypeScript',
    'about.skills.tech2': 'Web Design',
    'about.skills.tech3': 'Responsive Development',
    'about.skills.tech4': 'Modern UI/UX',
    'about.skills.tech5': 'Performance Optimization',
    'about.skills.tech6': 'Creative Solutions',
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive web solutions tailored to your business needs',
    'services.webservices.title': 'Web Services',
    'services.webservices.desc': 'Complete web development services including custom website design, development, and deployment. From simple landing pages to complex multi-page websites.',
    'services.webapps.title': 'Web Apps',
    'services.webapps.desc': 'Modern web applications built with React and cutting-edge technologies. Scalable, maintainable, and user-friendly applications for your business needs.',
    'services.creations.title': 'Web Creations',
    'services.creations.desc': 'Creative and innovative web solutions that stand out. Unique designs and interactive experiences that engage your audience and drive results.',
    'services.features': 'Features:',
    'services.cta.title': 'Ready to Get Started?',
    'services.cta.content': 'Let\'s discuss how we can help bring your vision to life with professional web services tailored to your needs.',
    'services.cta.button': 'Contact Us Today',
    'services.webservices.f1': 'Custom Design',
    'services.webservices.f2': 'Responsive Layout',
    'services.webservices.f3': 'SEO Optimization',
    'services.webservices.f4': 'Fast Loading',
    'services.webapps.f1': 'React Development',
    'services.webapps.f2': 'State Management',
    'services.webapps.f3': 'API Integration',
    'services.webapps.f4': 'Real-time Updates',
    'services.creations.f1': 'Creative Design',
    'services.creations.f2': 'Interactive Elements',
    'services.creations.f3': 'Animation & Motion',
    'services.creations.f4': 'Brand Identity',
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore some of our recent web creations',
    'portfolio.cta.content': 'Interested in working together? Let\'s discuss your next project!',
    'portfolio.cta.button': 'Get In Touch',
    'portfolio.visit': 'Visit Site',
    'portfolio.project1.title': 'Vodaci Hronov',
    'portfolio.project1.desc': 'Professional website for local business showcasing services and information',
    'portfolio.project2.title': 'Sea Kayaking',
    'portfolio.project2.desc': 'Adventure tourism website with booking functionality',
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s discuss your project and how we can help bring your vision to life',
    'contact.info.title': 'Contact Information',
    'contact.info.name': 'Name',
    'contact.info.email': 'Email',
    'contact.info.connect': 'Connect With Me',
    'contact.info.message': 'Feel free to reach out via email or connect on LinkedIn. I\'m always open to discussing new projects and opportunities!',
    'contact.info.footer': 'Looking forward to hearing from you!',
  },
};