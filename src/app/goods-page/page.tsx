'use client';

import * as React from 'react';
import Header from '@/components/header';
import MainProducts from '@/components/main-products';
import { Box } from '@mui/material';

export default function GoodsPage() {
  return (
    <Box sx={{
      background: '#F2F6FA',
    }}
    >
      <Header />
      <MainProducts />
    </Box>
  );
}
