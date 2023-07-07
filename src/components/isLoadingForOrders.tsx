import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack py={4} display="flex">
      <Stack spacing={3} alignSelf="center">
        <Skeleton variant="rounded" width={1000} height={100} />
        <Skeleton variant="rounded" width={1000} height={100} />
        <Skeleton variant="rounded" width={1000} height={100} />
        <Skeleton variant="rounded" width={1000} height={100} />
        <Skeleton variant="rounded" width={1000} height={100} />
        <Skeleton variant="rounded" width={1000} height={100} />
      </Stack>
    </Stack>
  );
}
