'use client';

import { useState } from 'react';
import { useGetProductsQuery } from '@/app/redux/services/product-service';
import { Box } from '@mui/material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import ProductsPagination from './products-pagination';
import ProductCardItem from './products-list-item';
import Variants from './isLoadingForCards';

const loadingCards = [
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
  <Variants key={1} />,
];
export default function ProductsList() {
  const params = useSearchParams();
  const [page, setPage] = useState(Number(params.get('page')) || 1);
  const limit = 20;
  const router = useRouter();
  const pathname = usePathname();
  const handlePagination = (pageNumber: number) => {
    router.replace(`${pathname}?page=${pageNumber}&limit=${limit}`);
    setPage(pageNumber);
  };
  const { data, error, isLoading } = useGetProductsQuery({ page, limit });
  const productList = data?.data;
  const pageCount = data?.meta?.total ? Math.ceil(data.meta.total / limit) : 0;
  return (
    <Box sx={{ pb: '40px' }}>
      <Box display="flex" gap={2} p={4} flexWrap="wrap" justifyContent="center">
        {isLoading
        && (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          mx="auto"
        >
          {loadingCards}
        </Box>
        )}
        {error && <h1>Some has gone wrong...</h1>}
        {productList ? productList.map((card) => (
          <ProductCardItem key={card.id} product={card} page={page} />
        )) : null}
      </Box>
      <Box justifyContent="center" display="flex">
        <ProductsPagination setPage={handlePagination} pageCount={pageCount} page={page} />
      </Box>
    </Box>
  );
}
