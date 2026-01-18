/**
 * Utility functions for handling portfolio screenshots
 * Screenshots should be placed in /public/portfolio/ directory
 */

export const getScreenshotPath = (filename: string): string => {
  return `/portfolio/${filename}`;
};

export const validateScreenshot = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

export const getPlaceholderImage = (): string => {
  return '/vite.svg';
};