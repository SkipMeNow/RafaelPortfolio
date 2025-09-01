import { createContext, useContext, useState, useCallback } from "react";
import { motionVariants } from "../utils/animationVariants";

interface PageAnimationContextType {
  variant: (typeof motionVariants)[keyof typeof motionVariants];
  key: string;
  onStart?: () => void;
  onComplete?: () => void;
  onExit?: () => void;
}

const PageAnimationContext = createContext<PageAnimationContextType | null>(
  null
);

export const usePageAnimation = () => {
  const context = useContext(PageAnimationContext);
  if (!context) {
    throw new Error(
      "usePageAnimation must be used within PageAnimationProvider"
    );
  }
  return context;
};

export const PageAnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const keys = Object.keys(motionVariants) as Array<
    keyof typeof motionVariants
  >;
  const [currentKey, setCurrentKey] = useState(
    () => keys[Math.floor(Math.random() * keys.length)]
  );
  const variant = motionVariants[currentKey];

  const onStart = () => {
    console.log(`[Animation Start] Variant: ${currentKey}`);
  };

  const onComplete = useCallback(() => {
    console.log(`[Animation Complete] Variant: ${currentKey}`);
    const nextKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(nextKey);
  }, [currentKey]);

  const onExit = () => {
    console.log(`[Animation Exit] Variant: ${currentKey}`);
  };

  return (
    <PageAnimationContext.Provider
      value={{
        variant,
        key: currentKey,
        onStart,
        onComplete,
        onExit,
      }}
    >
      {children}
    </PageAnimationContext.Provider>
  );
};
