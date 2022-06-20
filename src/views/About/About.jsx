import styles from '../../app.css'
import myPicture from '../../../public/myPicture.jpg';

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.portrait} src={myPicture} />
      <h3>Denzel Bartolaba</h3>
    </div>
  )
}
