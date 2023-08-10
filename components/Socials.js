// links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine, 
  RiTwitterLine, 
  RiGithubLine,
  RiFacebookLine
} from "react-icons/ri"

const Socials = () => {
  return( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={"https://www.youtube.com/channel/UCJGfCdAsc31QbsrXfPRka6Q"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
      </Link>
      <Link href={"https://www.instagram.com/fachu_moreno/"}target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/facundo-moreno-083775258/"}target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
      </Link>
      <Link href={"https://twitter.com/Fachuuu2"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiTwitterLine />
      </Link>
      <Link href={"https://github.com/Facundus01"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
      </Link>
  </div>
)};

export default Socials;
