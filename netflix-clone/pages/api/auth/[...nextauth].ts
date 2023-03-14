import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prismadb";
import { compare } from "bcrypt";
import routes from "@/routes";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }
        const isPasswordCorrect = compare(password, user.hashedPassword);

        if (!isPasswordCorrect) {
          throw new Error("Wrong password!");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: routes.login,
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  // Include user.id on session -> not necessary for this demo-app purposes, just added as a proof of concept
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
