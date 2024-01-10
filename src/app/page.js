import Image from 'next/image'
import AnimeList from './components/animeList'

export default async function Home() {
  const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await response.json();
  console.log(anime)

  return (
    <div>
      <h1>CUYANIMELIST</h1>
      <AnimeList/>
    </div>
  )
}
