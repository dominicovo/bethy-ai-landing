// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Cursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     // 1. Update posisi mouse saat digerakkan
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     // 2. Deteksi hover elemen klik-able
//     const handleHover = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName === "BUTTON" ||
//         target.tagName === "A" ||
//         target.closest("button") ||
//         target.closest("a")
//       ) {
//         setIsHovered(true);
//       } else {
//         setIsHovered(false);
//       }
//     };

//     window.addEventListener("mousemove", updateMousePosition);
//     window.addEventListener("mouseover", handleHover);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//       window.removeEventListener("mouseover", handleHover);
//     };
//   }, []);

//   if (typeof window !== "undefined" && window.innerWidth < 768) return null;

//   return (
//     <motion.div
//       className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
//       animate={{
//         x: mousePosition.x - 12,
//         y: mousePosition.y - 12,
//         scale: isHovered ? 1.5 : 1,
//       }}
//       // Kita pakai durasi sangat kecil (0.05) agar tidak 'stuck' tapi tetap terasa instan dan tidak kaku
//       transition={{ type: "tween", ease: "linear", duration: 0.05 }}
//     >
//       <div className="w-6 h-6 border-2 border-white rotate-0 flex items-center justify-center">
//         <div className="w-1.5 h-1.5 bg-white rounded-full" />
//       </div>
//     </motion.div>
//   );
// }
