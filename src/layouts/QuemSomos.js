import styles from './QuemSomos.module.css';
import EU from '../img/EU.png'

function QuemSomos() {
    return (
        <div>
            <div>
                <h1>Quem Somos</h1>
            </div>
            <section>

                <div className={styles.image}>
                    <img src={EU} alt='Foto Home' />
                </div>

                <div>
                    <article>

                    </article>
                </div>

            </section>
        </div>

    );
}

export default QuemSomos;