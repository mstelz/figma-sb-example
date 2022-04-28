import React from 'react';

import { Button } from "@mui/material"

/**
 * Primary UI component for user interaction
 */
export const MuiButton = ({label}) => {
  return (
    <Button color="primary" variant="contained" >
      {label}
    </Button>
  );
};
