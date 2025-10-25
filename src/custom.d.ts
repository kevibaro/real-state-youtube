// custom.d.ts o global.d.ts

declare module '*.css' {
  // Le dice a TypeScript que cualquier archivo .css es un módulo 
  // y que su contenido (si se importa con un nombre) puede ser de cualquier tipo.
  const content: any; 
  export default content; 
}