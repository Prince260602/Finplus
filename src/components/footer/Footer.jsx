import React from 'react';
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.leftSection}>
                <a href="#" className={styles.copyText}>© Ten Finplus 2024</a>
            </div>
            <div className={styles.centerSection}>
                <p className={styles.madeWithLove}>Made with ❤️ by Team Ten Finplus</p>
            </div>
            <div className={styles.rightSection}>
                <ul className={styles.links}>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:team@fortuna.com">Mail</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;

