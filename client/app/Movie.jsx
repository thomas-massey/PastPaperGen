import Link from 'next/link'
import Image from 'next/image'

export default function Movie({ title, id, poster_path, release_date }) {
    const image_path = `https://image.tmdb.org/t/p/original${poster_path}`
    return (
        <div>
            <h1>{title}</h1>
            <h2>Release date: {release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={image_path} alt={`Poster for ${title}`} width={300} height={450} />
            </Link>
        </div>
    )
}