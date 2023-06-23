import prismadb from "@/lib/prismadb";
import Image from "next/image";

export default async function Page({ params }: { params: { simpleId: string } }) {
    let simpleId = params.simpleId.toUpperCase();
    const user = await prismadb.user.findUnique({
        where: {
            simpleId: simpleId
        }
    });
    if (!user) {
        return(
            <div className="flex flex-col justify-center items-center">
                <h1>User with ID {simpleId} not found</h1>
            </div>
        )
    }
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>{user?.name}</h1>
            <h2>{user?.simpleId}</h2>
            <h3>{user?.email}</h3>
            <Image src={user?.image ?? "/images/default_profile_picture.png"} width={128} height={128} alt="User Image" />
        </div>
    )
}