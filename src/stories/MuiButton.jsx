import React from 'react';

import { Button } from "@mui/material"

/**
 * Primary UI component for user interaction
 */
export const MuiButton = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button variant="contained">
      {label}
    </Button>
  );
};
