import styles from './NavBar.module.css';
import Logo from '../img/SurtoLogo2.png';
function NavBar(){
    return(
        <div className = {styles.Nav}>
            <div className = {styles.Logo}>
                <img src = {Logo} alt = 'LOGO'/>
            </div>
            <ul className = {styles.List}>
                <li className = {styles.ListItens}><a href="#">Home</a></li>
                <li className = {styles.ListItens}><a href="#">Galeria</a></li>
                <li className = {styles.ListItens}><a href="#">Quem Somos</a></li>
                <li className = {styles.ListItens}><a href="#">Contatos</a></li>
            </ul>
        </div>
    );
}

export default NavBar;