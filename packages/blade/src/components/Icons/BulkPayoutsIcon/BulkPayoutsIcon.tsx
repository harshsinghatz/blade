import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const BulkPayoutsIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6001 2C10.9374 2 10.4001 2.53726 10.4001 3.19999C10.4001 3.86273 10.9374 4.39999 11.6001 4.39999H19.6001V12.4C19.6001 13.0627 20.1373 13.5999 20.8 13.5999C21.4628 13.5999 22 13.0627 22 12.4V3.19999C22 2.53726 21.4628 2 20.8 2H11.6001ZM5.60043 7.60069C5.60043 6.93795 6.13768 6.40069 6.80042 6.40069H16.4004C17.0631 6.40069 17.6004 6.93795 17.6004 7.60069V17.2006C17.6004 17.8634 17.0631 18.4006 16.4004 18.4006C15.7376 18.4006 15.2004 17.8634 15.2004 17.2006V10.4977L4.04852 21.6495C3.57989 22.1182 2.8201 22.1182 2.35147 21.6495C1.88284 21.1809 1.88284 20.4211 2.35147 19.9525L13.5033 8.80068H6.80042C6.13768 8.80068 5.60043 8.26343 5.60043 7.60069Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default BulkPayoutsIcon;
