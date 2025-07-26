// // src/app/features/animation-dashboard/animations/animations.ts

// import gsap from "gsap";

// export type AnimationOptions = {
//   // Solo agregá aquí los parámetros que quieras que el usuario pueda modificar
//   stagger?: number;
//   repeatDelay?: number;
//   // ...otros si querés
// };

// function bounceRotate(chars: any) {
//   const tl = gsap.timeline({
//     repeat: -1,
//     repeatDelay: 1, // valor por defecto 1s
//   });

//   tl.to(chars, {
//     y: "-2.75rem",
//     rotate: 0,
//     ease: "expo.out",
//     duration: 0.6,
//     stagger: 0.05, // valor por defecto 0.05
//   }).to(
//     chars,
//     {
//       y: 0,
//       ease: "bounce.out",
//       duration: 0.8,
//       stagger: 0.05,
//       delay: 0.1,
//     },
//     ">"
//   );
//   return tl;
// }

// export const animations = [
//   {
//     key: "bounceRotate",
//     label: "Bounce & Rotate",
//     fn: bounceRotate,
//     customizable: ["stagger", "repeatDelay"], // Solo estos parámetros se pueden modificar
//   },
//   // ...otras animaciones
// ];

// // Para lookup rápido por key
// export const animationMap = Object.fromEntries(
//   animations.map((a) => [a.key, a.fn])
// );



// tl.to($splitedText.chars, {
//     y: `-${text.fontSize * 2}`,
//     rotate: 360, // rota mientras sube
//     ease: "expo.out",
//     duration: 0.6,
//     stagger: 0.05,
//   }).to(
//     $splitedText.chars,
//     {
//       y: 0,
//       // rotate: 0, // no hace falta, ya está en 0
//       ease: "bounce.out",
//       duration: 0.8,
//       stagger: 0.05,
//       delay: -1, // delay entre keyframes
//     },
//     ">"
//   ); // ">" para que empiece justo después del anterior

//   return () => {
//     if (splitRef.current) {
//       gsap.killTweensOf(splitRef.current.chars);
//       splitRef.current.revert();
//       splitRef.current = null;
//     }
//     tl.kill();