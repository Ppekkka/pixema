import { useLocation } from 'react-router-dom';

export const useIsSign = (): boolean => {
    let link = useLocation().pathname;
    const isSign = link.includes("sign-up") || link.includes( "activate-account") || link.includes("sign-in");

    return isSign;
}