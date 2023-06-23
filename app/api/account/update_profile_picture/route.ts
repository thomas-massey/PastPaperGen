import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export async function POST(req: any, res: any) {
    const session = await getServerSession(authOptions)
    if (!session) {
        return res.status(401).send("Unauthorized")
    }
    const { user } = session
    const { path } = req.query
    return res.status(200).send("OK")
}