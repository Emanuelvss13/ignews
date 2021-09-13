import styles from './style.module.scss'

interface ButtonProps{
    priceId: string
}

export default function SubscribeButton({priceId}: ButtonProps) {
    return (
        <button type="button" className={styles.subscribeButton} >
            Subscribe now
        </button>
    )
}