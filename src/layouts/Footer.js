import styles from './Footer.module.css';

function Footer(){
    return(
       <div className={styles.Footer}>
        <ul className={styles.List}>
            <li className={styles.ListItem}><a href="">Home</a></li>
            <li className={styles.ListItem}><a href="">Contatos</a></li>
            <li className={styles.ListItem}><a href="">Instagram</a></li>
            <li className={styles.ListItem}><a href="">Facebook</a></li>
        </ul>

       </div>
    );
}

export default Footer;