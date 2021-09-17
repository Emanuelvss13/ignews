import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import styles from './style.module.scss'
import { getStripeJs } from '../../services/stripe-js'
import { useRouter } from 'next/dist/client/router'

interface ButtonProps{
    priceId: string
}

export default function SubscribeButton({priceId}: ButtonProps) {
    const [session] = useSession()
    const router = useRouter()

    async function handleSubscribe(){
        if(!session){
            signIn('github')
            return
        }

        if(session.activeSubscription){
            router.push('/posts')
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