import React from 'react';
import { StyledPlayerFilter } from './styledComponents';


export const PlayerFilter = ({ value, onChange }) => (
  <StyledPlayerFilter>
    <label htmlFor="name">
      Filter Players:
      <input
        type="text"
        id="name"
        name="name"
        size="25"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  </StyledPlayerFilter>
);
