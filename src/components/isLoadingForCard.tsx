import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack py={4} alignSelf="center">
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={450} height={300} />
        <Skeleton variant="rounded" width={450} height={300} />
      </Stack>
    </Stack>
  );
}
