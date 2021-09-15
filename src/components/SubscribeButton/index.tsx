import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import styles from './style.module.scss'
import { getStripeJs } from '../../services/stripe-js'

interface ButtonProps{
    priceId: string
}

export default function SubscribeButton({priceId}: ButtonProps) {
    const [session] = useSession()
    
    async function handleSubscribe(){
        if(!session){
            signIn('github')
            return
        }

        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId})
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <button 
            type="button" 
            className={styles.subscribeButton} 
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}