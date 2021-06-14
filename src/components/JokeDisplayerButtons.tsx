import React from 'react';
import { ButtonPair } from './ButtonPair';
import { DiscardJokeIcon } from './DiscardJoke.icon';
import { IconButton } from './IconButton';
import { StarJokeIcon } from './StarJoke.icon';

type JokeDisplayerButtonsProps = {
  onPressFunctionButton1: () => any;
  onPressFunctionButton2: () => any;
  iconStylesButton1: {}[];
  iconStylesButton2: {}[];
};

export const JokeDisplayerButtons: React.FC<JokeDisplayerButtonsProps> = ({
  onPressFunctionButton1,
  onPressFunctionButton2,
  iconStylesButton1,
  iconStylesButton2,
}) => {
  return (
    <ButtonPair>
      <IconButton
        iconStyles={iconStylesButton1}
        onPressFunction={onPressFunctionButton1}
      >
        <DiscardJokeIcon />
      </IconButton>
      <IconButton
        iconStyles={iconStylesButton2}
        onPressFunction={onPressFunctionButton2}
      >
        <StarJokeIcon />
      </IconButton>
    </ButtonPair>
  );
};
