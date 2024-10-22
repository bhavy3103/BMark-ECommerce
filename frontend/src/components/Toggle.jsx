import * as React from 'react';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Button } from '@mui/material';

export function Toggle() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 2,
        minHeight: '56px',
      }}
    >

      <Button
        variant={mode === 'light' ? 'contained' : 'outlined'}
        onClick={() => setMode('light')}
        sx={{
          mx: 0.5,
        }}
      ><MdLightMode /></Button>

      <Button
        variant={mode === 'dark' ? 'contained' : 'outlined'}
        onClick={() => setMode('dark')}
        sx={{
          mx: 0.5,
        }}
      ><MdDarkMode /></Button>

    </Box>
  );
}




