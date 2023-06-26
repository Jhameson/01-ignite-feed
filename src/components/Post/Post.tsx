import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/jhameson.png"
            alt=""
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Jhameson Lucas</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="11 de maio de 2022" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          voluptates qui illum debitis reprehenderit repellat ratione neque
          delectus minima incidunt, corporis similique!
        </p>
        <p>
          Error exercitationem maiores incidunt ipsum porro
          <a href=""> debitis consequuntur?</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
