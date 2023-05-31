import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.section1}>
                <div>
                    <Link to={'/'}><img className={styles.userLogo} src="public\logo\coding.png" alt="Logo" /></Link>
                </div>
                <div>
                    <Link to={'/problemset/all'}><img className={styles.userLogo} src="public\logo\solution.png" alt="Problems" /></Link>
                </div>

            </div>
            <div className={styles.section2}>
                <Link to={'/login'}><img className={styles.userLogo} src="public\logo\user.png" alt="Login" /></Link>
                
            </div>
        </div>
    );
}
export default Header;