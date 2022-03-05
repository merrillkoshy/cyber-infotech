import './index.scss';
import React from 'react';
import { loadIcons } from '../utils/IconLoader';
import type { AppProps } from 'next/app'
// import '~bootstrap/dist/js/bootstrap'
loadIcons();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps}/>
    );
  }
export default MyApp;

