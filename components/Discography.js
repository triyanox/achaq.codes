import Image from "next/image";
import Link from "next/link";
import songs from "../data/songs";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Discography = () => {
  return (
    <motion.div variants={stagger}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 mt-8 px-auto lg:mx-10">
        {songs.map((song) => (
          <motion.div
            key={song.id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            whileTap={{ scale: 0.8 }}
            className="flex justify-center items-center hover:scale-110 active:scale-90 transition-all duration-500 cursor-pointer "
          >
            <Link
              key={song.id}
              href="/songs/[id]"
              as={`/songs/${song.id}`}
              passHref
            >
              <Image
                className="rounded-xl shadow-xl"
                src={song.image}
                width={512}
                height={512}
                alt={song.songName}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Discography;
