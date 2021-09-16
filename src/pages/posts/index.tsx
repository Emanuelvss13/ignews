import Head from 'next/head'
import styles from './styles.module.scss'

export default function index() {
    return (
        <>
            <Head>
                <title>Posts | IgNews</title>
            </Head>
            <main className={styles.Container} >
                <div className={styles.posts} >
                    <a href="#" >
                        <time>16/09/2021 10:23</time>
                        <strong>eFootball 2022 é gratuito, mas DLC custa o preço de um jogo completo</strong>
                        <p>Jogo será lançado em 30 de setembro para consoles e PC</p>
                    </a>
                    
                    <a href="#" >
                        <time>16/09/2021 10:23</time>
                        <strong>eFootball 2022 é gratuito, mas DLC custa o preço de um jogo completo</strong>
                        <p>Jogo será lançado em 30 de setembro para consoles e PC</p>
                    </a>
                    
                    <a href="#" >
                        <time>16/09/2021 10:23</time>
                        <strong>eFootball 2022 é gratuito, mas DLC custa o preço de um jogo completo</strong>
                        <p>Jogo será lançado em 30 de setembro para consoles e PC</p>
                    </a>
                </div>
            </main>
        </>

    )
}
