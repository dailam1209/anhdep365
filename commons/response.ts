import { useMediaQuery } from "react-responsive";

export const useDeviceQueries = () => {
    const isPC = useMediaQuery({ query: "(min-width: 1920px)" });
    const isPCSmall = useMediaQuery({ query: "(min-width: 1336px)" });
    const isTabnet = useMediaQuery({ query: "(max-width: 912px)" });
    const isTabnetSmall = useMediaQuery({ query: "(max-width: 768px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  
    return { isPC, isPCSmall, isTabnet, isTabnetSmall, isMobile };
  };
