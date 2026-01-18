import { createSlice } from '@reduxjs/toolkit';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  screenshot: string;
  technologies: string[];
}

interface PortfolioState {
  items: PortfolioItem[];
}

const initialState: PortfolioState = {
  items: [
    {
      id: '1',
      title: 'Vodaci Hronov',
      description: 'Professional website for local business',
      url: 'https://vodacihronov.com/',
      screenshot: '/portfolio/vodacihronov.png',
      technologies: ['React', 'Web Design'],
    },
    {
      id: '2',
      title: 'Sea Kayaking',
      description: 'Adventure tourism website',
      url: 'https://sea-kayaking.netlify.app/',
      screenshot: '/portfolio/sea-kayaking.png',
      technologies: ['React', 'Netlify'],
    },
  ],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;