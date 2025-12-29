import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { mal_id } = useParams();
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getAnime() {
      try {
        const request = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);

        if (!request.ok) {
          return setNotFound(true);
        }
        const response = await request.json();

        setAnime(response.data);
      } catch (error) {
        console.error("Error fetching anime data ...");
      } finally {
        setLoading(false);
      }
    }
    getAnime();
  }, [mal_id]);

  if (notFound) {
    return <h1>Data Anime tidak ditemukan</h1>;
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading Anime Data ...</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{anime.title}</h1>
          <img
            className="article-image"
            src={anime.images?.jpg?.image_url}
            alt={anime.title}
          />
          <p className="article-synopsis">{anime.synopsis}</p>
          <p className="article-source">
            Source:{" "}
            <a href={anime.url} target="_blank" rel="noreferrer">
              MyAnimeList {anime.title}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
