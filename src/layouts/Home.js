import styles from './Home.module.css';
import Background from '../img/fundo.png';
function Home() {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
            <img src = {Background} alt = 'Foto Home'/>
            </div>
        </div>
    );
}

export default Home;