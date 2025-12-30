import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Homepage</h1>
      <p className="section-description">Sekedar Homepage</p>
    </section>
  );
}
