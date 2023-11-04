import React, { useEffect } from "react";
import { Router } from "next/router";
import 'react-loading-skeleton/dist/skeleton.css'
import "../assets/sass/main.scss";
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../global.css'

export default function App({ Component, pageProps }) {

  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading...");
  });
  
  return (
    <>
      <NextNProgress height={20} />
      <Component { ...pageProps } />
      <ToastContainer position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover = {false}
        draggable
          theme = "light"
      />
    </>
  );
}
