import styles from './Galeria.module.css';
import Pulsar from '../img/Pulsar.png';
import Anaca from '../img/Anacã.png';
import Inmsonia from '../img/Inmsonia.png';

function Galeria() {
    return (
        <div className={styles.content}>

            <div className={styles.Titulo}>
                <h1>Galeria</h1>
            </div>

            <div className={styles.Galeria}>

                <div className={styles.GaleriaContent}>
                    <div className={styles.TituloGaleria}>
                        <h2>Coming Soon</h2>
                    </div>

                    <div className={styles.Images}>
                        <h3>Coming Soon</h3>
                    </div>
                </div>

                <div className={styles.GaleriaContent}>
                    <div className={styles.TituloGaleria}>
                        <h2>Inmsonia Festival</h2>
                    </div>

                    <div className={styles.Images}>
                        <img src={Inmsonia} alt='Inmsonia Festival' />
                    </div>
                </div>

                <div className={styles.GaleriaContent}>
                    <div className={styles.TituloGaleria}>
                        <h2>Coming Soon</h2>
                    </div>

                    <div className={styles.Images}>
                        <h3>Coming Soon</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeria;