// `pages/_app.js`
import '../styles/global.css';
import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}