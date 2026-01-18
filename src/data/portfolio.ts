export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  screenshot: string;
  technologies: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Vodaci Hronov',
    description: 'Professional website for local business showcasing services and information',
    url: 'https://vodacihronov.com/',
    screenshot: '/portfolio/vodacihronov.png',
    technologies: ['React', 'Web Design', 'Responsive'],
  },
  {
    id: '2',
    title: 'Sea Kayaking',
    description: 'Adventure tourism website with booking functionality',
    url: 'https://sea-kayaking.netlify.app/',
    screenshot: '/portfolio/sea-kayaking.png',
    technologies: ['React', 'Netlify', 'Modern UI'],
  },
];