'use client';

import * as React from 'react';
import MainProducts from '@/components/main-products';
import { Box } from '@mui/material';
import Header from '../components/header';

export default function GoodsPage() {
  return (
    <Box bgcolor="background.default">
      <Header />
      <MainProducts />
    </Box>
  );
}
