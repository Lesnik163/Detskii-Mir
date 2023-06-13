'use client';

import OrderList from '@/components/order-list';
import { Box } from '@mui/material';

export default function Orders() {
  return (
    <Box bgcolor="background.default">
      <OrderList />
    </Box>
  );
}
