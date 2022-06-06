import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
  // Destructing props: state movies
  const { title, movies } = props;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
