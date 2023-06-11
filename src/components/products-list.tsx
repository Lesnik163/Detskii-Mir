import { useState } from 'react';
import { useGetProductsQuery } from '@/app/redux/services/product-service';
import { Box } from '@mui/material';
import ProductsPagination from './products-pagination';
import ProductCardItem from './products-list-item';

export default function ProductsList() {
  const [page, setPage] = useState(1);
  const limit = 15;
  const { data } = useGetProductsQuery({ page, limit });
  const productList = data?.data;
  const pageCount = data?.meta?.total ? Math.ceil(data.meta.total / limit) : 0;
  return (
    <Box sx={{ pt: '24px', pb: '40px' }}>
      <Box display="flex" gap={2} p={4} flexWrap="wrap" justifyContent="center">
        {productList ? productList.map((card) => (
          <ProductCardItem key={card.id} product={card} />
        )) : null}
      </Box>
      <Box justifyContent="center" display="flex">
        <ProductsPagination setPage={setPage} pageCount={pageCount} />
      </Box>
    </Box>
  );
}
