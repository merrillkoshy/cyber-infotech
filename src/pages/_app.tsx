import './index.scss';
import React from 'react';
import { loadIcons } from '../utils/IconLoader';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import WhatsAppWidget from "react-whatsapp-widget"
loadIcons();

function MyApp ( { Component, pageProps }: AppProps ) {
  return (
    <>
      <div className='whatsapp-widget' style={{zIndex:6, position:'fixed'}}>
      <WhatsAppWidget
          phoneNumber="971521954262"
          textReplyTime="Typically replies within 5 minutes"
          companyName="Cyber Infotech"
          message={ 
            'Hello! 👋🏼 \n\nHow can we assist you?'
          }
        />
        </div>
      <Component { ...pageProps } />
      <ToastContainer />
    </>
  );
}
export default MyApp;

