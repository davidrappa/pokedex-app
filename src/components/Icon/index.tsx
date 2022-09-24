import React from "react";
import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import IconBug from "../../assets/svg/ICON-TYPE-BUG.svg";
import IconDark from "../../assets/svg/ICON-TYPE-DARK.svg";
import IconDragon from "../../assets/svg/ICON-TYPE-DRAGON.svg";
import IconElectric from "../../assets/svg/ICON-TYPE-ELECTRIC.svg";
import IconFairy from "../../assets/svg/ICON-TYPE-FAIRY.svg";
import IconFighting from "../../assets/svg/ICON-TYPE-FIGHTING.svg";
import IconFire from "../../assets/svg/ICON-TYPE-FIRE.svg";
import IconFlying from "../../assets/svg/ICON-TYPE-FLYING.svg";
import IconGhost from "../../assets/svg/ICON-TYPE-GHOST.svg";
import IconGrass from "../../assets/svg/ICON-TYPE-GRASS.svg";
import IconGround from "../../assets/svg/ICON-TYPE-GROUND.svg";
import IconIce from "../../assets/svg/ICON-TYPE-ICE.svg";
import IconNormal from "../../assets/svg/ICON-TYPE-NORMAL.svg";
import IconPoison from "../../assets/svg/ICON-TYPE-POISON.svg";
import IconPsychic from "../../assets/svg/ICON-TYPE-PSYCHIC.svg";
import IconRock from "../../assets/svg/ICON-TYPE-ROCK.svg";
import IconSteel from "../../assets/svg/ICON-TYPE-STEEL.svg";
import IconWater from "../../assets/svg/ICON-TYPE-WATER.svg";
import IconBack from "../../assets/svg/ICON-BACK.svg";
import IconFilter from "../../assets/svg/ICON-FILTER.svg";
import IconFront from "../../assets/svg/ICON-FRONT.svg";
import IconGeneration from "../../assets/svg/ICON-GENERATION.svg";
import IconSearch from "../../assets/svg/ICON-SEARCH.svg";
import IconSort from "../../assets/svg/ICON-SORT.svg";
import IconHeightShort from "../../assets/svg/ICON-HEIGHT-SHORT.svg";
import IconHeightMedium from "../../assets/svg/ICON-HEIGHT-MEDIUM.svg";
import IconHeightTall from "../../assets/svg/ICON-HEIGHT-TALL.svg";
import IconWeightLight from "../../assets/svg/ICON-WEIGHT-LIGHT.svg";
import IconWeightNormal from "../../assets/svg/ICON-WEIGHT-NORMAL.svg";
import IconWeightHeavy from "../../assets/svg/ICON-WEIGHT-HEAVY.svg";

export type IconType =
  | "icon-bug"
  | "icon-dark"
  | "icon-dragon"
  | "icon-electric"
  | "icon-fairy"
  | "icon-fighting"
  | "icon-fire"
  | "icon-flying"
  | "icon-ghost"
  | "icon-grass"
  | "icon-ground"
  | "icon-ice"
  | "icon-normal"
  | "icon-poison"
  | "icon-psychic"
  | "icon-rock"
  | "icon-steel"
  | "icon-water"
  | "icon-back"
  | "icon-front"
  | "icon-filter"
  | "icon-sort"
  | "icon-search"
  | "icon-generation"
  | "icon-weight-normal"
  | "icon-weight-light"
  | "icon-weight-heavy"
  | "icon-height-short"
  | "icon-height-medium"
  | "icon-height-tall";

interface IconProps {
  name: IconType;
  fill?: string;
  width?: number | "100%";
  height?: number | "100%";
  diffStyles?: ViewStyle;
  diffIconProps?: SvgProps;
}

const Icon = (props: IconProps): JSX.Element => {
  const {
    name,
    width = 30,
    height = 30,
    fill = "#222222",
    diffStyles,
    diffIconProps,
  } = props;

  const iconProps = {
    width,
    height,
    fill,
    ...diffIconProps,
  };

  const finalProps = {
    ...iconProps,
    style: diffStyles,
  };

  type LiteralType = {
    [key in IconType]: JSX.Element;
  };

  const icons: LiteralType = {
    "icon-bug": <IconBug {...finalProps} />,
    "icon-dark": <IconDark {...finalProps} />,
    "icon-dragon": <IconDragon {...finalProps} />,
    "icon-electric": <IconElectric {...finalProps} />,
    "icon-fairy": <IconFairy {...finalProps} />,
    "icon-fighting": <IconFighting {...finalProps} />,
    "icon-fire": <IconFire {...finalProps} />,
    "icon-flying": <IconFlying {...finalProps} />,
    "icon-ghost": <IconGhost {...finalProps} />,
    "icon-grass": <IconGrass {...finalProps} />,
    "icon-ground": <IconGround {...finalProps} />,
    "icon-ice": <IconIce {...finalProps} />,
    "icon-normal": <IconNormal {...finalProps} />,
    "icon-poison": <IconPoison {...finalProps} />,
    "icon-psychic": <IconPsychic {...finalProps} />,
    "icon-rock": <IconRock {...finalProps} />,
    "icon-steel": <IconSteel {...finalProps} />,
    "icon-water": <IconWater {...finalProps} />,
    "icon-back": <IconBack {...finalProps} />,
    "icon-front": <IconFront {...finalProps} />,
    "icon-filter": <IconFilter {...finalProps} />,
    "icon-sort": <IconSort {...finalProps} />,
    "icon-search": <IconSearch {...finalProps} />,
    "icon-generation": <IconGeneration {...finalProps} />,
    "icon-weight-normal": <IconWeightNormal {...finalProps} />,
    "icon-weight-light": <IconWeightLight {...finalProps} />,
    "icon-weight-heavy": <IconWeightHeavy {...finalProps} />,
    "icon-height-short": <IconHeightShort {...finalProps} />,
    "icon-height-medium": <IconHeightMedium {...finalProps} />,
    "icon-height-tall": <IconHeightTall {...finalProps} />,
  };

  return icons[name] || <IconBug {...finalProps} />;
};

export default Icon;
