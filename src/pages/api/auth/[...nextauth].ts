import { fauna } from './../../../services/fauna';
import {query as q} from 'faunadb'
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
  ],
  jwt:{
    signingKey: process.env.JWT_KEY
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await fauna.query(
          q.Create(
            q.Collection('Users'),
            { data: { email } }
          )
        )
        return true
      } catch {
        return false
      }
    },
  }
})
