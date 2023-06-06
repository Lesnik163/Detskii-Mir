'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <Box sx={{
      alignSelf: 'center',
    }}
    >
      <Image src="/Logo.svg" width={150} height={15} alt="Blue Cube" />
    </Box>
  );
}
