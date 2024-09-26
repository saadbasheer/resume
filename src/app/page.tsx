import Head from 'next/head';

export default function PDFViewer() {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My professional resume" />
      </Head>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="/Kokadan Saad.pdf"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Resume PDF"
        />
      </div>
    </>
  );
}