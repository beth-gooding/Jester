import React from 'react';
import { Svg, Path, G } from 'react-native-svg'; 

type DiscardJokeIconProps = {
    color?: string;
    size?: number;
}

export const DiscardJokeIcon: React.FC<DiscardJokeIconProps> = ({ 
    color = '#1C72E3', 
    size = 110, 
}) => {
    return (
        <Svg  width={size} height={size} fill={color} viewBox="0 0 24 24" >
            <G>
                <Path  d="m14.828 12 5.303-5.303c.586-.586.586-1.536 0-2.121l-.707-.707c-.586-.586-1.536-.586-2.121 0l-5.303 5.303-5.303-5.304c-.586-.586-1.536-.586-2.121 0l-.708.707c-.586.586-.586 1.536 0 2.121l5.304 5.304-5.303 5.303c-.586.586-.586 1.536 0 2.121l.707.707c.586.586 1.536.586 2.121 0l5.303-5.303 5.303 5.303c.586.586 1.536.586 2.121 0l.707-.707c.586-.586.586-1.536 0-2.121z" />
            </G>
        </Svg>
    )
}
