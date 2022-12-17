import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {
    colors: {
      boxType: {
        bug: string;
        dragon: string;
        dark: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundType: {
        bug: string;
        dragon: string;
        dark: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      projectColors: {
        "background-white": string;
        "background-default-input": string;
        "background-pressed-input": string;
        "background-modal": string;

        "text-white": string;
        "text-black": string;
        "text-gray": string;
        "text-number": string;

        "height-short": string;
        "height-medium": string;
        "height-tall": string;

        "weight-light": string;
        "weight-medium": string;
        "weight-heavy": string;
      };
    };
    fontSizes: {
      "font-size-32": number;
      "font-size-26": number;
      "font-size-24": number;
      "font-size-16": number;
      "font-size-12": number;
    };
    fontWeights: {
      "font-weight-light": string;
      "font-weight-regular": string;
      "font-weight-bold": string;
    };
  }
}
