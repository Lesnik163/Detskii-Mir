import * as React from 'react';

import Box from '@mui/material/Box';
import HeaderTabs from '@/components/header-tabs';
import HeaderLogo from '@/components/header-logo';
import Cart from '@/components/cart';

export default function Header() {
  return (
    <Box sx={{
      display: 'grid',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '48px',
      borderBottom: '1px solid #E6F1FC',
    }}
    >
      <HeaderLogo />
      <HeaderTabs />
      <Cart />
    </Box>
  );
}
