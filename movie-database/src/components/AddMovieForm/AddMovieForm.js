import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input id="title" className={styles.form__input} type="text" />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input id="date" className={styles.form__input} type="text" />
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
