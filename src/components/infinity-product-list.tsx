import { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetProductsQuery } from '../app/redux/services/product-service';
import ProductCard from './products-list-item';

export default function ProductList() {
  const [page, setPage] = useState(1);
  const limit = 20;

  const { data } = useGetProductsQuery({ page, limit });
  const productList = data?.data;
  const loadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  if (!productList?.length) {
    return null;
  }

  return (
    <InfiniteScroll
      next={loadMore}
      hasMore={!(data?.meta?.count === 0)}
      loader={<h1>LOADING....</h1>}
      dataLength={productList.length}
    >
      <Box>
        <Box display="flex" gap={2} p={4} flexWrap="wrap" justifyContent="center">
          {productList.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Box>
      </Box>
    </InfiniteScroll>
  );
}
