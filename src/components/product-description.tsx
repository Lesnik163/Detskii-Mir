import { Paper, Typography } from '@mui/material';

export default function ProductDetails({ description }: { description: string }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: 'auto',
        // width: '60%',
        maxWidth: '792px',
        borderRadius: '16px',
      }}
    >
      <Typography
        dangerouslySetInnerHTML={{ __html: description }}
        p={2}
      />
    </Paper>
  );
}
