import { useEffect, useRef, useState } from "react";

type VantaEffect = {
    destroy: () => void;
  };
  
export default function VantaBg(){
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  
    useEffect(() => {
      if (typeof window === "undefined") return;
  
      if (!vantaEffect) {
        Promise.all([
          import("three"),
          import("vanta/dist/vanta.net.min.js"),
        ]).then(([THREE, VANTA]) => {
          const effect = VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x2626c8,
            backgroundColor: 0xd9d9d9,
            maxDistance: 18.0,
            spacing: 16.0,
          });
          setVantaEffect(effect);
        });
      }
  
      return () => {
        vantaEffect?.destroy();
      };
    }, [vantaEffect]);

    return(
        <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-[900px]"
      ></div>
    )
  
}