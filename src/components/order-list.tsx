import { Box, Stack } from '@mui/material';
// import Pagination from './pagination';
// import orderListMock from '@/mockData/order-list-mock'; // Моковые данные
// import { IOrderItem } from '@/interfaces/order-interface';
// import OrderListItem from './order-list-item';
// import { useGetOrdersQuery } from '@/app/redux/services/order-service';

export default function OrderList() {
  // const orderList = useFetchCartStateQuery('');
  // console.log(orderList);
  // const page = 1;
  // const limit = 5;
  // const { data } = useGetOrdersQuery({ page, limit });
  // console.log(data);
  return (
    <Box width={1}>
      <Stack
        direction="column"
        justifyContent="center"
        width={1}
        px="15%"
        gap={3}
      >
        {/* {data?.data?.map((order: IOrderItem[]) => (
          <OrderListItem key={Math.round(Math.random() * 1000)} order={order} />
        ))} */}
      </Stack>
      <Box justifyContent="center" display="flex">
        {/* <Pagination /> */}
      </Box>
    </Box>
  );
}
