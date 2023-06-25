import styles from './Sidebar.module.css'
import profile from '../assets/Profile.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={profile} alt="" className={styles.cover} />
      <div className={styles.profile}>
        <strong>Jhameson</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
