"use client";
import { cn } from "../../lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext(undefined);

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context; // Now correctly returns `[isMouseEntered, setIsMouseEntered]`
};
export { useMouseEnter };

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  useEffect(() => {
    let angle = 0;

    const animate = () => {
      if (!containerRef.current) return;
      angle += 0.06; // Adjust speed
      const x = Math.sin(angle) * 3; // Adjust floating range
      const y = Math.cos(angle) * 3;
      const z = Math.sin(angle) * 5;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(${z}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseLeave={() => setIsMouseEntered(false)}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// export const CardContainer = ({ children, className, containerClassName }) => {
//   const containerRef = useRef(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = (e) => {
//     setIsMouseEntered(true);
//     if (!containerRef.current) return;
//   };

//   const handleMouseLeave = (e) => {
//     if (!containerRef.current) return;
//     setIsMouseEntered(false);
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };
//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       <div
//         className={cn(
//           "py-20 flex items-center justify-center",
//           containerClassName
//         )}
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className={cn(
//             "flex items-center justify-center relative transition-all duration-200 ease-linear",
//             className
//           )}
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
