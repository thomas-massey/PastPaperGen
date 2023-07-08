import { supabaseServer } from "@/lib/supabaseServer";
import Image from "next/image";

export default async function Page({ params }: { params: { simple_id: string } }) {
    let simple_id = params.simple_id.toLowerCase();
    // .toUpperCase();
    const { data } = await supabaseServer
        .from('users')
        .select('id, full_name, avatar_url')
        .eq('simple_id', simple_id)
    console.log(data)
    if (data == null || data.length == 0) {
        return <div>Not found</div>
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">
                Page
            </h1>
            <h2 className="text-center">
                Simple ID: {simple_id}
            </h2>
            <h2 className="text-center">
                Full name: {data[0].full_name}
            </h2>
            <h2 className="text-center">
                Profile Picture:
            </h2>
            <div className="flex justify-center">
                <Image src={data[0].avatar_url || '/images/default_profile_picture.png'} width={200} height={200} alt="Profile Picture" />
            </div>
        </div>
    );
}