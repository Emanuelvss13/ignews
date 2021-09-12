import { useState } from 'react'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton(){
    const [loggedIn, setLoggedIn] = useState(true)
    
    return loggedIn ? (
        <button onClick={() => setLoggedIn(false)} className={styles.signInButton} type="button">
            <FaGithub color="#04d361" />
            Emanuel Vítor
            <FiX color="#737380" className={styles.closeIcon} /> 
        </button>
    ) : (
        <button onClick={() => setLoggedIn(true)} className={styles.signInButton} type="button">
            <FaGithub color="#eba417" />
            Sign In With Github
        </button>
    )
}