import React from 'react';
import { Svg, Path, G } from 'react-native-svg';

type AddJokeIconProps = {
  color?: string;
  size?: number;
};

export const AddJokeIcon: React.FC<AddJokeIconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 384 384">
      <G>
        <G>
          <G>
            <Path d="M368,176c-8.832,0-16,7.168-16,16c0,88.224-71.776,160-160,160S32,280.224,32,192S103.776,32,192,32    c42.952,0,83.272,16.784,113.544,47.264c6.216,6.272,16.352,6.312,22.624,0.08c6.272-6.224,6.304-16.352,0.08-22.624    C291.928,20.144,243.536,0,192,0C86.128,0,0,86.128,0,192s86.128,192,192,192s192-86.128,192-192C384,183.168,376.832,176,368,176    z" />
          </G>
        </G>
        <G>
          <G>
            <Path d="M256,176h-48v-48c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v48h-48c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16    h48v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h48c8.832,0,16-7.168,16-16C272,183.168,264.832,176,256,176z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};
