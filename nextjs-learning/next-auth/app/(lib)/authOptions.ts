import  CredentialsProvider from "next-auth/providers/credentials";
import  GoogleProvider from "next-auth/providers/google";
import  FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        getCredentialsProvider(),
        getGoogleProvider(),
        getFacebookProvider()
    ],
    secret : process.env.NEXTAUTH_SECRET
}

function getCredentialsProvider() {
   return CredentialsProvider({
        name: 'username',
        credentials: {
            username: { label: 'username', type: 'text', placeholder: 'username' },
            password: { label: 'Password', type: 'password', placeholder: 'password' }
        },
        async authorize(credentials,req) : Promise<any> {
            console.log('credentials ',credentials);
            const { username, password } = credentials;
            //Add db logic to validate the credentials

            const user = { id: 1, name: username, email: 'test@gmail.com' };
            if (user)
                return user;
            else
                return null;
        }
    })
}

function getGoogleProvider() {
  return  GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
}
function getFacebookProvider() {
  return  FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID || '',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
    })
}
export default authOptions;

