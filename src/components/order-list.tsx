import { Box, Stack } from '@mui/material';
// import Pagination from './pagination';
import orderListMock from '@/mockData/order-list-mock';
import OrderListItem from './order-list-item';

export default function OrderList() {
  return (
    <Box width={1}>
      <Stack
        direction="column"
        justifyContent="center"
        width={1}
        px="15%"
        gap={3}
      >
        {orderListMock.map((order) => (
          <OrderListItem key={order.number} />
        ))}
      </Stack>
      <Box justifyContent="center" display="flex">
        {/* <Pagination /> */}
      </Box>
    </Box>
  );
}
