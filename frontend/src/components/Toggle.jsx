import * as React from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
import { useColorScheme } from '@mui/material/styles';
import { MdDarkMode, MdLightMode, MdSystemUpdate } from 'react-icons/md';

export function Toggle() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <FormControl>
        {/* <FormLabel id="demo-theme-toggle">Theme</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          {/* <FormControlLabel value="system" control={<Radio />} label={<MdSystemUpdate width={10} />} /> */}
          <FormControlLabel value="light" control={<Radio />} label={<MdLightMode width={14}/>} />
          <FormControlLabel value="dark" control={<Radio />} label={<MdDarkMode width={14}/>} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}