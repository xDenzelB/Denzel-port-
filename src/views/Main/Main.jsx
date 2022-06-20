import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import styles from '../../app.css';

export default function Main() {
  return (
    <>
    <ParticlesBackground />
      <div className={styles.mainContainer}>
        <h1 className={styles.myName}>Hello World</h1>
    </div>
    </>
  )
}
