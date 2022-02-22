import Link from "next/link";
import Image from "next/image";
import { playlists } from "../data/playlists";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PlayList = () => {
  return (
    <motion.div variants={stagger}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 mt-8 px-auto lg:mx-10">
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            className="flex justify-center items-center hover:scale-110 active:scale-90 transition-all duration-500 cursor-pointer "
          >
            <Link href={playlist.link} passHref>
              <a target="_blank">
                <Image
                  className="rounded-xl shadow-xl"
                  src={playlist.image}
                  width={512}
                  height={512}
                  alt={playlist.name}
                />
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default PlayList;
