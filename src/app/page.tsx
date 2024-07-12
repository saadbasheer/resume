

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <iframe
        src="/resume.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
