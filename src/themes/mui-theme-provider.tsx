'use client';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import theme from './light-theme';

const isBrowser = typeof document !== 'undefined';

function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}

const clientSideEmotionCache = createEmotionCache();

export default function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
