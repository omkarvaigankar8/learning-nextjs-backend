'use server'
import client from '@/db';

export async function signup(username: string, password: string) {
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    console.log("user.id", user.id)
    return "Signed Up"
}