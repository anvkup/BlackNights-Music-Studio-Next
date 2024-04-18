import "./style.css";
import { Analytics } from '@vercel/analytics/react';

import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
