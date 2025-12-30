import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Page";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">Sekedar Contact Page</p>
    </section>
  );
}
