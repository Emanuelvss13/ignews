import '../../styles/global.scss'
import { AppProps } from "next/app"
import { Header } from "../components/Header"
import {Provider as NextAuth} from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextAuth session={pageProps.session} >
      <Header/>
      <Component {...pageProps} />
    </NextAuth>
  )
}

export default MyApp
