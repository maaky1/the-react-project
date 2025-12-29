import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAnimes() {
      try {
        const request = await fetch("https://api.jikan.moe/v4/top/anime?sfw");
        const response = await request.json();

        setAnimes(response.data);
      } catch (error) {
        console.error("Error fetching anime data ...");
      } finally {
        setLoading(false);
      }
    }
    getAnimes();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      <p className="section-description">Sekedar Blog Page</p>
      {loading && <i>Fetch Anime Data ...</i>}
      {!loading && (
        <div className="articles">
          {animes.map((anime) => {
            return (
              <article key={anime.mal_id} className="article">
                <h2 className="article-title">
                  <Link to={`/blog/${anime.mal_id}`}>{anime.title}</Link>
                </h2>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
