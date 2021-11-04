import React from 'react';
import {
  StyledCheckBoxLabel,
  StyledCheckBox,
  StyledCheckBoxWrapper,
} from '../../styled/ToggleSwitch.styled';

const ToggleSwitch = () => {
  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox id="checkbox" type="checkbox" />
      <StyledCheckBoxLabel htmlFor="checkbox" />
    </StyledCheckBoxWrapper>
  );
};

export default ToggleSwitch;
