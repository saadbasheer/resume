"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function PDFViewer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return a loading spinner
  }

  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My professional resume" />
      </Head>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>It appears you don{"'"}t have a PDF plugin for this browser. 
          You can <a href="/resume.pdf">click here to download the PDF file.</a></p>
        </object>
      </div>
    </>
  );
}