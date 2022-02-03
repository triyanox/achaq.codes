import songs from "../../data/songs";
import Layout from "../../Themes/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  SiSpotify,
  SiApplemusic,
  SiDeezer,
  SiSoundcloud,
  SiYoutubemusic,
} from "react-icons/si";
export const getStaticProps = async ({ params }) => {
  const songsList = songs.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: songsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = songs.map((song) => ({
    params: { id: song.id },
  }));

  return { paths, fallback: false };
};

const Song = ({ song }) => (
  <Layout
    pageTitle={song.songName}
    description={song.songName}
    siteName="Achaq Codes"
  >
    <div className="container px-12 lg:px-24 flex justify-center items-center  flex-col mt-8 lg:mt-2 mb-24">
      <div className="mt-12">
        <Image
          className="rounded-xl shadow-xl"
          src={song.image}
          width={300}
          height={300}
          alt={song.songName}
          quality={100}
        />
      </div>
      <div className="mt-8 flex flex-col justify-center items-center ">
        <h1 className="text-center text-2xl bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text mb-2">
          {song.songName}
        </h1>
        <div className="flex flex-row justify-center  items-center gap-2 text-gray-800 dark:text-gray-200">
          {song.artists.map((artist) => (
            <p className="text-center" key={song.id}>
              {artist}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center items-center mt-8">
          <Link href={song.spotify} passHref>
            <a target="_blank">
              <button className="flex items-center  py-3 px-3 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl">
                <h1 className="text-gray-200 dark:text-gray-800 text-3xl ">
                  <SiSpotify />
                </h1>
              </button>
            </a>
          </Link>
          <Link href={song.apple} passHref>
            <a target="_blank">
              <button className="flex items-center  py-3 px-3 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl">
                <h1 className="text-gray-200 dark:text-gray-800 text-3xl ">
                  <SiApplemusic />
                </h1>
              </button>
            </a>
          </Link>
          <Link href={song.deezer} passHref>
            <a target="_blank">
              <button className="flex items-center  py-3 px-3 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl">
                <h1 className="text-gray-200 dark:text-gray-800 text-3xl ">
                  <SiDeezer />
                </h1>
              </button>
            </a>
          </Link>
          <Link href={song.soundcloud} passHref>
            <a target="_blank">
              <button className="flex items-center  py-3 px-3 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl">
                <h1 className="text-gray-200 dark:text-gray-800 text-3xl ">
                  <SiSoundcloud />
                </h1>
              </button>
            </a>
          </Link>
          <Link href={song.youtube} passHref>
            <a target="_blank">
              <button className="flex items-center  py-3 px-3 hover:scale-110 transition-all duration-500 active:scale-90 bg-gray-800 dark:bg-gray-200 mx-auto  rounded-md  text-md shadow-xl">
                <h1 className="text-gray-200 dark:text-gray-800 text-3xl ">
                  <SiYoutubemusic />
                </h1>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default Song;
