import React from 'react';
import {
  StyledCheckBoxLabel,
  StyledCheckBox,
  StyledCheckBoxWrapper,
} from '../../styled/ToggleSwitch.styled';

const ToggleSwitch = ({ functionality }) => {
  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox id="checkbox" type="checkbox" onClick={functionality}/>
      <StyledCheckBoxLabel htmlFor="checkbox" />
    </StyledCheckBoxWrapper>
  );
};

export default ToggleSwitch;
