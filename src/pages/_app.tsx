import './index.scss';
import React from 'react';
import { loadIcons } from '../utils/IconLoader';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
// import '~bootstrap/dist/js/bootstrap'
loadIcons();

function MyApp ( { Component, pageProps }: AppProps ) {
  return (
    <>
      <Component { ...pageProps } />
      <ToastContainer />
    </>
  );
}
export default MyApp;

