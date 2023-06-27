import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Coment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/maykBrito.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhameson</strong>
              <time title="11 de maio de 2022" dateTime="2022-05-11 08:13:30">
                Cerca de 1hr atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
