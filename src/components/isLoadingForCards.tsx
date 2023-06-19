import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack py={6}>
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={250} height={120} />
        <Skeleton variant="rounded" width={250} height={60} />
        <Skeleton variant="rounded" width={250} height={60} />
      </Stack>
    </Stack>
  );
}
