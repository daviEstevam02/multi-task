const IconNames = [
    "arrowRight",
    "caretDown",
    "close",
    "crown",
    "favorite",
    "favoriteFilled",
    "email",
    "add",
    "tasks",
    "connectedAccounts",
    "clock",
    "clockCountdown",
    "gridView",
    "listView",
    "order",
    "start",
    "finish",
    "logout",
    "calendar",
    "board",
    "chevronDown",
    "search",
    "notification",
    "share",
    "signOut",
    "refresh",
    "world",
  ] as const;
  
  const Logos = [
    "google",
    "github",
    "microsoft",
    "planner",
    "trello",
    "azuredevops",
  ] as const;
  
  export type IconNameType = (typeof IconNames)[number];
  export type LogoIconType = (typeof Logos)[number];
  
  export interface IIconProps {
    iconName: IconNameType;
    iconStyle?: React.CSSProperties;
    iconSize?: number;
    iconColor?: string;
  }
  
  export interface ILogoIconProps {
    iconName: LogoIconType;
    iconStyle?: React.CSSProperties;
    iconSize?: number;
    defs?: string;
  }
  
  interface ILogoIconLib {
    viewBox: string;
    paths: string[];
    fill: string[];
    defs?: string;
  }
  
  export interface ILogoLibProps {
    logo: any;
    props: ILogoIconLib
  }