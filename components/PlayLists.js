import Link from "next/link";
import Image from "next/image";
import { playlists } from "../data/playlists";

const PlayList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-6 mt-8  lg:mx-10">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="flex justify-center items-center hover:scale-110 active:scale-90 transition-all duration-500 cursor-pointer "
          >
            <Link href={playlist.link} passHref>
              <a target="_blank">
                <Image
                  className="rounded-xl shadow-xl"
                  src={playlist.image}
                  width={400}
                  height={400}
                  alt={playlist.name}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlayList;
