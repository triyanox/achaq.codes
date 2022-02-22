import {
  SiSpotify,
  SiApplemusic,
  SiDeezer,
  SiSoundcloud,
  SiTidal,
  SiShazam,
  SiYoutubemusic,
} from "react-icons/si";
import Link from "next/link";

const ArtistLinks = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 text-3xl mt-8 text-gray-600 dark:text-gray-400">
      <Link
        href="https://open.spotify.com/artist/1FANbPGANtQAo6TbZ8zv6s"
        passHref
      >
        <a target="_blank">
          <SiSpotify />
        </a>
      </Link>
      <Link
        href="https://music.apple.com/us/artist/triyanox/1470752907"
        passHref
      >
        <a target="_blank">
          <SiApplemusic />
        </a>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCrJaoW2Yni38czAUgDLM3CQ"
        passHref
      >
        <a target="_blank">
          <SiYoutubemusic />
        </a>
      </Link>
      <Link href="https://www.deezer.com/en/artist/68001032" passHref>
        <a target="_blank">
          <SiDeezer />
        </a>
      </Link>
      <Link href="https://soundcloud.com/triyanox" passHref>
        <a target="_blank">
          <SiSoundcloud />
        </a>
      </Link>
      <Link href="https://tidal.com/browse/artist/16083945/" passHref>
        <a target="_blank">
          <SiTidal />
        </a>
      </Link>
      <Link href="https://www.shazam.com/artist/205773147/triyanox" passHref>
        <a target="_blank">
          <SiShazam />
        </a>
      </Link>
    </div>
  );
};

export default ArtistLinks;
