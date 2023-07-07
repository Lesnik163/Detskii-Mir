import { useCallback, useState } from 'react';
import { Box, Stack } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
// import Pagination from './pagination';
// import orderListMock from '@/mockData/order-list-mock'; // Моковые данные
import { IOrderItem } from '@/interfaces/order-interface';
import { useGetOrdersQuery } from '@/app/redux/services/order-service';
import OrderListItem from './order-list-item';

export default function OrderList() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, error } = useGetOrdersQuery({ page, limit });
  const orderList = data?.data;
  const loadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  // console.log('ответ после запроса на товар', data);
  return (
    <InfiniteScroll
      next={loadMore}
      hasMore={!(data?.meta?.count === 0)}
      loader={<h1>LOADING....</h1>}
      dataLength={data?.data?.length as number}
    >
      <Box width={1}>
        <Stack
          direction="column"
          justifyContent="center"
          width={1}
          px="15%"
          gap={3}
        >
          {isLoading && <div>wait...</div>}
          {error && <h1>Some has gone wrong...</h1>}
          {data && orderList?.map((order: IOrderItem[], index) => (
            <OrderListItem key={Math.round(Math.random() * 1000)} order={order} index={index} />
          ))}
        </Stack>
        <Box justifyContent="center" display="flex">
          {/* <Pagination /> */}
        </Box>
      </Box>
    </InfiniteScroll>
  );
}
