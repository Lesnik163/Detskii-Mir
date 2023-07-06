import { Box, Stack } from '@mui/material';
// import Pagination from './pagination';
// import orderListMock from '@/mockData/order-list-mock'; // Моковые данные
import { IOrderItem } from '@/interfaces/order-interface';
import { useGetOrdersQuery } from '@/app/redux/services/order-service';
import OrderListItem from './order-list-item';

export default function OrderList() {
  const page = 1;
  const limit = 30;
  const { data } = useGetOrdersQuery({ page, limit });
  // console.log('ответ после запроса на товар', data);
  return (
    <Box width={1}>
      <Stack
        direction="column"
        justifyContent="center"
        width={1}
        px="15%"
        gap={3}
      >
        {data?.data?.map((order: IOrderItem[], index) => (
          <OrderListItem key={Math.round(Math.random() * 1000)} order={order} index={index} />
        ))}
      </Stack>
      <Box justifyContent="center" display="flex">
        {/* <Pagination /> */}
      </Box>
    </Box>
  );
}
