import {
    IIconProps,
    ILogoIconProps,
  } from "../../models/IIconProps";
  import { IconLibrary, Logos } from "./IconLibrary";
  
  const Icon = ({
    iconName,
    iconColor,
    iconSize,
    iconStyle = { opacity: 1 },
  }: IIconProps) => {
    const renderPaths = IconLibrary[iconName]?.paths.map(
      (path: string, index: number) => <path key={index} d={path}></path>,
    );
  
    const viewBox = IconLibrary[iconName]?.viewBox;
  
    return (
      <svg
        style={iconStyle}
        viewBox={viewBox}
        width={iconSize ? iconSize : 24}
        height={iconSize ? iconSize : 24}
        fill={iconColor ? iconColor : "#1A1B1C"}
      >
        {renderPaths}
      </svg>
    );
  };
  
  const LogoIcon = (props: ILogoIconProps) => {
    const { iconName, iconStyle, iconSize } = props;
  
    const renderPaths = Logos[iconName]?.paths.map(
      (path: string, index: number) => (
        <path key={index} d={path} fill={`${Logos[iconName].fill[index]}`}></path>
      ),
    );
  
    const renderDefs = Logos[iconName]?.defs.map((def) => (
      <linearGradient
        key={def.id}
        id={def.id}
        x1={def.x1}
        y1={def.y1}
        x2={def.x2}
        y2={def.y2}
        gradientUnits={def.gradientUnits}
      >
        {def.stopColor.map((color: string, index: number) =>
          def.offset && index !== 0 ? (
            <stop key={index} offset={def.offset} stopColor={color} />
          ) : (
            <stop key={index} stopColor={color} />
          ),
        )}
      </linearGradient>
    ));
  
    const viewBox = Logos[iconName]?.viewBox;
  
    return (
      <svg
        style={iconStyle}
        viewBox={viewBox}
        width={iconSize ? iconSize : 24}
        height={iconSize ? iconSize : 24}
      >
        {renderPaths}
        {!!Logos[iconName].defs && <defs>{renderDefs}</defs>}
      </svg>
    );
  };

  export { Icon, LogoIcon };