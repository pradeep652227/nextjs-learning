import {getServerSession} from 'next-auth';

export default async function Profile(){
    const session = await getServerSession();
    console.log('session ',session);

    return JSON.stringify(session);
}