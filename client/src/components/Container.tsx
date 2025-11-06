import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  grid?: boolean;
}

export const Container = ({ children, className = "", as: Component = "div", grid = true }: ContainerProps) => {
  return (
    <Component className={`w-full mx-auto px-6 md:px-8 lg:px-16 max-w-[1440px] ${className}`}>
      {grid ? (
        <div className="grid grid-cols-12 gap-6">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
};
