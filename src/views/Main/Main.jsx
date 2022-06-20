import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import styles from '../../app.css';
import Typewriter from 'typewriter-effect';
import About from "../About/About";

export default function Main() {
  return (
    <>
    <ParticlesBackground />
      <div className={styles.mainContainer}>
        <Typewriter className={styles.myName}
          onInit={(typewriter) => {
            typewriter.typeString('Welcome to Denzel Bartolaba\'s Portfolio!').start();
           }}/>
      </div>
      <div>
        <About />
      </div>
    </>
  )
}
