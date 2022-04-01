import './index.scss';
import React from 'react';
import { loadIcons } from '../utils/IconLoader';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import WhatsAppWidget from "react-whatsapp-widget"
import Head from 'next/head';
loadIcons();

function MyApp ( { Component, pageProps }: AppProps ) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://www.cyberinfotechuae.com/"></link>
        <base target="_blank" />
      {/* <!-- Primary Meta Tags --> */}
<title>Cyber InfoTech UAE</title>
<meta name="title" content="Cyber InfoTech UAE"/>
<meta name="description" content="Specialized in digitization, IT hardware, peripherals, security and servicing across UAE."/>

{/* <!-- Open Graph / Facebook --/> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.cyberinfotechuae.com/"/>
<meta property="og:title" content="Cyber InfoTech UAE"/>
<meta property="og:description" content="Specialized in digitization, IT hardware, peripherals, security and servicing across UAE."/>
<meta property="og:image" content="/banner.png"/>

        {/* <!-- Twitter --/> */ }
        <meta name="twitter:app:country" content="ae" />
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.cyberinfotechuae.com/"/>
<meta property="twitter:title" content="Cyber InfoTech UAE"/>
<meta property="twitter:description" content="Specialized in digitization, IT hardware, peripherals, security and servicing across UAE."/>
<meta property="twitter:image" content="/banner.png"/>
      </Head>
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

