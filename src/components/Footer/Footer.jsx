import styles from './styles.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerData}>
                <div>Copyright © 2023.</div>
                <div>Tushar Jaiswal</div>
                <div><a href='https://www.linkedin.com/in/tushar-jaiswal-331202172/' target="_blank"><img className={styles.logo} src='public\logo\LI-In-Bug.png' alt='LinkedIn'/></a> <a href='https://github.com/Tusharj045' target="_blank"><img className={styles.logo} src='public\logo\github-mark-white.png' alt='Github'/></a></div>
            </div>
        </div>
    )
}
export default Footer;