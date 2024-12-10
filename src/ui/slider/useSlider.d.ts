import { ReactNode } from "react";
export declare const useSlider: (slides: ReactNode[]) => {
    currentIndex: number;
    goToSlide: (index: number) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handlers: import("react-swipeable").SwipeableHandlers;
    isPaused: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
};
//# sourceMappingURL=useSlider.d.ts.map