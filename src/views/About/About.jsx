import styles from '../../app.css'
import myPicture from '../../../public/myPicture.jpg';

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.portrait} src={myPicture} />
      <h2>Denzel Bartolaba (He/Him)</h2>
      <p>FullStack JavaScript Software Engineer</p>
      <button className={styles.btn}>My Portfolio</button>
      <button className={styles.btn}>My Experience</button>
      <button className={styles.btn}>Lets Connect!</button>
    </div>
  )
}
