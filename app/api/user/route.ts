// import { NextRequest } from "next/server"
// import client from '@/db';
// // const client = new PrismaClient();
// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.username, email: user?.username })
// }
// export async function POST(req: NextRequest) {
//     const body = await req.json();
//     const user = await client.user.create({
//         data: {
//             username: body.username,
//             password: body.password
//         }
//     })
//     console.log("USER ID", user.id)
//     return Response.json({ message: "Signed Up" })
// }