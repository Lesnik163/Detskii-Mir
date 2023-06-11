'use client';

import * as React from 'react';
import { Container, Pagination, PaginationItem } from '@mui/material';
import NextArr from '../../public/NextArr.svg';
import PrevArr from '../../public/PrevArr.svg';

interface IPaginationProps {
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void;
  pageCount: number;
  page: number;
}

export default function ProductsPagination({ setPage, pageCount, page }: IPaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <Pagination
        sx={{
          '&  .MuiPaginationItem-root': {
            color: 'warning.main',
            fontWeight: '700',
          },
          '&  .MuiPaginationItem-root:hover': {
            bgcolor: 'secondary.main',
          },
          '&  .MuiPaginationItem-root[aria-current="true"]': {
            color: '#FFFFFF',
            bgcolor: 'warning.main',
          },
          '&  .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
        count={pageCount}
        page={page}
        shape="rounded"
        color="primary"
        boundaryCount={2}
        onChange={handleChange}
        siblingCount={0}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: PrevArr, next: NextArr }}
            {...item}
          />
        )}
      />
    </Container>
  );
}
