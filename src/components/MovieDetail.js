import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css"

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div className={styles.moviedetail}>
      <h1>
        <a href={url} target="_blank" className={styles.moviedetail__title}>
          {title}
        </a>
      </h1>
      <div className={styles.moviedetail__ti}>
        <img src={src} alt={title} />
        <div className={styles.moviedetail__ti__tx}>
          <h4 className={styles.moviedetail__rating}>Movie Rating: {rating}</h4>
          <div className={styles.moviedetail__genres}>
            <h4>genres</h4>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h4>description</h4>
      <p className={styles.moviedetail__description}> {description} </p>
      
      <br />
      <hr />
      <a href={url} target="_blank">
        Go to the site&rarr;
      </a>
      <p>
      <Link to="/">Go to the Movie List &rarr;</Link>
      </p>
    </div>
  );
}

export default MovieDetail;