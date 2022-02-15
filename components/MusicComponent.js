import Image from "next/image";
import Achaq from "../assets/achaq.png";
import ArtistLinks from "./ArtistLinks";
import Discography from "./Discography";
import PlayList from "./PlayLists";
const MusicComponent = () => {
  return (
    <section
      id="music"
      className="container px-12 lg:px-24 flex justify-center  flex-col mt-8 lg:mt-12 mb-4"
    >
      <div className="h-screen w-full">
        <div className=" flex justify-start items-center flex-col mt-0 lg:mt-4 ">
          <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 bg-gradient-to-r from-cyan-500 to-purple-800  text-transparent bg-clip-text">
            Music
          </h1>
        </div>

        <div className=" flex items-center flex-col mt-8 p-1">
          <Image
            className="rounded-full"
            src={Achaq}
            width={200}
            height={200}
            alt="Mohamed Achaq"
            quality={100}
          />
        </div>
        <div className="relative flex justify-start items-center flex-col mt-8 ">
          <p className="text-gray-600 dark:text-gray-400 text-center mt-4 mb-8">
            My name is Mohamed Achaq and I&apos;m a music producer and sound
            designer from Morocco ! I make various styles of music like future
            house, deep house, future bass ... Check out my tracks and enjoy !
          </p>
          <ArtistLinks />
        </div>
      </div>
      <div className="h-full">
        <div className=" relative flex justify-start items-start flex-col flex-1  ">
          <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
            Discography
          </h1>
          <h3 className="text-gray-600 dark:text-gray-400 mb-2">
            All my music out there !
          </h3>
        </div>
        <Discography />
      </div>
      <div className="h-full mt-16">
        <div className=" relative flex justify-start items-start flex-col flex-1  ">
          <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-2 bg-gradient-to-r from-cyan-500 to-purple-800 top-0 text-transparent bg-clip-text">
            My Playlists
          </h1>
          <h3 className="text-gray-600 dark:text-gray-400 mb-2">
            Check out my playlists for great electronic music !
          </h3>
        </div>
        <PlayList />
      </div>
    </section>
  );
};

export default MusicComponent;
