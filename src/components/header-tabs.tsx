'use client';

import React from 'react';
import {
  Box, Tab, Tabs,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabsPath: Record<string, number> = {
  '/': 1,
  '/orders': 2,
};

export default function HeaderTabs() {
  const pathName = usePathname();
  const [value, setValue] = React.useState(tabsPath[pathName] ?? 1);

  const handleChange = () => {
    const newValue = tabsPath[pathName];
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  return (
    <Box
      // position="fixed"
      display="flex"
      justifyContent="center"
      boxSizing="border-box"
      width="100%"
      height="48px"
      px="32px"
      bgcolor="error.main"
      borderBottom="1px solid #E6F1FC"
      top={0}
      left={0}
      // zIndex={1000}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          value={1}
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            color: 'text.primary',
            '&.Mui-selected': {
              color: 'warning.main',
            },
          }}
          label={(
            <Link href="/" style={{ textDecoration: 'unset', color: 'unset' }}>
              Товары
            </Link>
          )}
        />
        <Tab
          value={2}
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            color: 'text.primary',
            '&.Mui-selected': {
              color: 'primary.main',
            },
          }}
          label={(
            <Link href="/orders" style={{ textDecoration: 'unset', color: 'unset' }}>
              Заказы
            </Link>
          )}
        />
      </Tabs>
    </Box>
  );
}
