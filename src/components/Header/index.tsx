/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import { SignInButton } from './SignInButton'

export function Header() {
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo ignews" />
                <nav>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}
