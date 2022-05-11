export type logo = SVGImageElement;

declare module '*postcss.config.js' {
  export interface Options {
    plugins: Plugin[];
  }
}
