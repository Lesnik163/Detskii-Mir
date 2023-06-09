'use client';

// import orderListMock from '@/mockData/order-list-mock'; // Моковые данные
import { useCallback, useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IOrderItem } from '@/interfaces/order-interface';
import { useGetOrdersQuery, orderApi } from '@/app/redux/services/order-service';
import { useDispatch } from 'react-redux';
import theme from '@/themes/light-theme';
import Variants from './isLoadingForOrders';
import OrderListItem from './order-list-item';

// eslint-disable-next-line prefer-arrow-callback
export default function OrderList() {
  const [page, setPage] = useState(1);
  const limit = 8;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderApi.util.resetApiState());
  }, [dispatch]);
  const { data, isLoading, error } = useGetOrdersQuery({ page, limit });
  const orderList = data?.data;

  const loadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  if (isLoading) {
    return <Variants />;
  }
  if (error) {
    return (
      <Box
        mx="auto"
        width="500px"
        color="red"
      >
        Что-то пошло не так. Проверьте подключение к интернету!

      </Box>
    );
  }
  if (orderList?.length === 0) {
    if (!orderList) {
      return null;
    }
    return (
      <Box
        mx="auto"
        width="500px"
        color="warning.main"
      >
        Корзина пуста. Необходимо оформить хотя бы один заказ!
      </Box>
    );
  }
  if (!data && orderList?.length === 0) { return null; }
  return (
    <InfiniteScroll
      next={loadMore}
      hasMore={!(data?.meta?.count === 0)}
      loader={(
        <Box
          mx="auto"
          width="300px"
          color="warning.main"
          textAlign="center"
          py="15px"
          fontSize="20px"
        >
          Больше заказов нет!
        </Box>
)}
      dataLength={data?.data?.length as number}
    >
      <Box width={1}>
        <Stack
          direction="column"
          justifyContent="center"
          width={1}
          px="15%"
          gap={3}
          sx={{
            [theme.breakpoints.down('lg')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              px: '2%',
            },
          }}
        >
          {data && orderList?.map((order: IOrderItem[], index) => (
            <OrderListItem
              key={Math.round(Math.random() * 10000 + 7 * 12)
                + Math.round(Math.random() * 400)}
              order={order}
              index={index}
            />
          ))}
        </Stack>
      </Box>
    </InfiniteScroll>
  );
}
