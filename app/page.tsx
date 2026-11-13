import pkg from "../package.json";

// Render on every request so the time and GREETING reflect the running server.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: "4rem", margin: 0 }}>Demo app v2</h1>
      <p>Version: {pkg.version}</p>
      <p>Current time: {new Date().toISOString()}</p>
      <p>GREETING: {process.env.GREETING || "GREETING not set"}</p>
    </main>
  );
}
