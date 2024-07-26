// route.ts
import NextAuth from 'next-auth/next';
import { authOption } from '../authOptions';

const handler = NextAuth(authOption)
export { handler as GET, handler as POST };

//!v1
// import { NextAuthOptions } from 'next-auth'
// import NextAuth from 'next-auth/next'
// import GoogleProvider from 'next-auth/providers/google'
// import { prisma } from './../../../lib/prisma'
// import { session } from './../../../lib/session'



// const authOption: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       if (!profile?.email) {
//         throw new Error('No profile')
//       }

//       await prisma.user.upsert({
//         where: {
//           email: profile.email,
//         },
//         create: {
//           email: profile.email,
//           name: profile.name,
//         },
//         update: {
//           name: profile.name,
//         },
//       })
//       return true
//     },
//     session,
//     async jwt({ token, user, account, profile }) {
//       if (profile) {
//         const user = await prisma.user.findUnique({
//           where: {
//             email: profile.email,
//           },
//         })
//         if (!user) {
//           throw new Error('No user found')
//         }
//         token.id = user.id
//       }
//       return token
//     },
//   },
// }

// const handler = NextAuth(authOption)
// export { handler as GET, handler as POST }


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// const handler =NextAuth({
//     providers:[
        
//         GoogleProvider({
//         clientId: process.env.AUTH_GOOGLE_ID,
//         clientSecret: process.env.AUTH_GOOGLE_SECRET
//     })]
// });

// export { handler as GET, handler as POST };

