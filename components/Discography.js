import Image from "next/image";
import Link from "next/link";
import songs from "../data/songs";

const Discography = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-6 mt-8  lg:mx-10">
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex justify-center items-center hover:scale-110 active:scale-90 transition-all duration-500 cursor-pointer "
        >
          <Link
            key={song.id}
            href="/music/[id]"
            as={`/music/${song.id}`}
            passHref
          >
            <Image
              className="rounded-xl shadow-xl"
              src={song.image}
              width={400}
              height={400}
              alt={song.songName}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Discography;
