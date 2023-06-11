import * as React from 'react';

import Box from '@mui/material/Box';
import theme from '@/themes/light-theme';
import HeaderTabs from './header-tabs';
import HeaderLogo from './header-logo';
import BasicPopover from './basicPopover';

export default function Header() {
  return (
    <Box sx={{
      display: 'grid',
      alignItems: 'center',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '48px',
      borderBottom: '1px solid #E6F1FC',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, auto)',
        justifyContent: 'space-evenly',
      },
    }}
    >
      <HeaderLogo />
      <HeaderTabs />
      <BasicPopover />
    </Box>
  );
}
