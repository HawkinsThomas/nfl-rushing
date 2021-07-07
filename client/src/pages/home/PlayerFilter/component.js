import React from 'react';
import { StyledPlayerFilter } from './styledComponents';


export const PlayerFilter = ({ value, onChange }) => (
    <StyledPlayerFilter>
      <label for="name">Search For Player: </label>
      <input
        type="text"
        id="name"
        name="name"
        size="25"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledPlayerFilter>
);
