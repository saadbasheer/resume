import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My professional resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <iframe 
        src="/resume.pdf" 
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}