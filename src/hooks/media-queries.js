import { useMediaQuery } from 'react-responsive';

export const useIsMinimumMobile = () => useMediaQuery({ minWidth: 480 });

export const useIsMinimumTablet = () => useMediaQuery({ minWidth: 768 });

export const useIsMinimumDesktop = () => useMediaQuery({ minWidth: 1024 });

export const useIsMinimumDesktopLarge = () => useMediaQuery({ minWidth: 1280 });

export const useIsMinimumDesktopXLarge = () => useMediaQuery({ minWidth: 1440 });

/*If the width of the screen >=1441px, it is considered as fullscreen.
Use this hook for fullscreen specific render*/
export const useIsFullScreen = () => useMediaQuery({ minWidth: 1441 });

export const useIsPortrait = () => useMediaQuery({ orientation: 'portrait' });
