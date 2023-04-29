import Image from "next/image"

export async function generateStaticParams(){
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()
    return res.results.map((movie) => ({
        params: {
            movie: movie.id.toString()
        }
    }))        
}

export default async function MovieDetail({params}){
    const { movie } = params
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
        {next: {revalidate: 0}}
    )
    const res = await data.json()
    const image_path = `https://image.tmdb.org/t/p/original${res.poster_path}`
    const backdrop_path = `https://image.tmdb.org/t/p/original${res.backdrop_path}`
    return (
        <div>
            <h1 className="text-2xl">Movie Detail</h1>
            <h2 className="text-lg">{res.title}</h2>
            <h3>Runtime: {res.runtime} minutes</h3>
            <h3>Release date: {res.release_date}</h3>
            <h3 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h3>
            <p>{res.overview}</p>
            <Image src={`${image_path}`} alt={`Poster for ${res.title}`} width={300} height={450} priority/>
            <Image src={`${backdrop_path}`} alt={`Backdrop for ${res.title}`} width={300} height={450} priority/>
        </div>
    )
}