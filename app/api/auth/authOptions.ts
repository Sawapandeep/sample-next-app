import { prisma } from '@/app/lib/prisma';
import { session } from '@/app/lib/session';
import bcrypt from 'bcrypt';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOption: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'user@email.com' },
        password: { label: 'Password', type: 'password', placeholder: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });

        if (!user) return null;

        const passmatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

        if (!passmatch) return null;

        // Transform the Prisma user object to match NextAuth's User type
        const transformedUser: User = {
          id: String(user.id),
          email: user.email,
          name: user.name,
          // Add any other properties you might need
        };

        return transformedUser;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google' && profile) {
        if (!profile.email) {
          return false;
        }

        await prisma.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name,
          },
          update: {
            name: profile.name,
          },
        });
      }

      return true;
    },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.id = token.id;
    //   }

    //   return session;
    // }
    session,
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
};

// import CredentialsProvider from 'next-auth/providers/credentials';

// import { prisma } from '@/app/lib/prisma';
// import { session } from '@/app/lib/session';
// import bcrypt from 'bcrypt';
// import { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// export const authOption: NextAuthOptions = {
//     session: {
//       strategy: 'jwt',
//     },
//     providers: [
//       CredentialsProvider({
//         name:'Credentials',
//         credentials:{
//           email:{label:'Email',type:'email', placeholder:'user@email.com'},
//           password:{label:'Password',type:'password',placeholder:'password'}   
//         },
//         async authorize(credentials,req){
//           if(!credentials?.email || !credentials.password) return null;
  
//           const user = await prisma.user.findUnique({where:{email:credentials.email}});
  
//           if(!user) return null;
  
//           const passmatch=await bcrypt.compare(credentials.password, user.hashedPassword!);
  
//             return passmatch ? user :null;
//         }
//       }),
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID!,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       }),
//     ],
//     callbacks: {
//       async signIn({ account, profile }) {
//         if (!profile?.email) {
//           throw new Error('No profile');
//         }
  
//         await prisma.user.upsert({
//           where: {
//             email: profile.email,
//           },
//           create: {
//             email: profile.email,
//             name: profile.name,
//           },
//           update: {
//             name: profile.name,
//           },
//         })
//         return true
//       },
//       session,
//       async jwt({ token, user, account, profile }) {
//         if (profile) {
//           const user = await prisma.user.findUnique({
//             where: {
//               email: profile.email,
//             },
//           })
//           if (!user) {
//             throw new Error('No user found')
//           }
//           token.id = user.id
//         }
//         return token
//       }, 
//     },
//   }
  