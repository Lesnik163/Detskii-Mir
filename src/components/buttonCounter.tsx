import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Image from 'next/image';
// import WhiteMinus from '../../public/whiteMinus.svg';
// import BlueMinus from '../../public/blueMinus.svg';

export default function ButtonCounter() {
  const buttons = [
    <Button key="one">-</Button>,
    <Button key="two" disabled>2</Button>,
    <Button key="three">+</Button>,
  ];

  return (
    <ButtonGroup
      size="small"
      aria-label="small button group"
      sx={{
        borderRadius: '12px',
        mx: 6,
        '& .MuiButton-root': {
          color: 'warning.main',
          height: '52px',
          width: '52px',
          fontSize: '25px',
          background: '#E6F1FC',
          borderRadius: '12px',
        },
        '& .MuiButton-root:hover': {
          background: 'linear-gradient(0deg, rgba(0, 115, 230, 0.1), rgba(0, 115, 230, 0.1)), #E6F1FC',
        },
        '& .MuiButton-root:active': {
          background: '#0073E6',
          color: '#ffffff',
        },
        '& .MuiButton-root:disabled': {
          background: 'primary.main',
          fontSize: '16px',
          color: 'black',
          border: 'none',
        },
        '& .MuiButton-root[tab]': {
          background: 'red',
        },
      }}
    >
      {buttons}
    </ButtonGroup>
  );
}
