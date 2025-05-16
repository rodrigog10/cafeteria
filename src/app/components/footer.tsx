import { Braces } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2a3f2c] via-[#3f5b40] to-[#1d2a1e]  py-5 w-full relative mt-[8rem]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
        {/* Texto "Desenvolvido por" - agora perfeitamente centralizado */}
        <div className="flex items-center gap-2">
          <span className="text-amber-100 font-fira">Desenvolvido por</span>
          <span className="font-fira bg-gradient-to-r drop-shadow-[0_0_0.1rem_#000000] from-black to-amber-950 text-transparent bg-clip-text leading-tight">
            Rodrigo Bispo
          </span>
          <Braces className="text-amber-100" size={20} />
        </div>

        {/* Redes sociais em coluna */}
        <div className="flex rounded-md drop-shadow-[0_0_30px_white] items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/rodrigog10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-amber-100 hover:text-gray-500 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="mailto:rodrigobisppo123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail
                className="text-amber-100 hover:text-red-400 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-amber-100 hover:text-blue-500 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/rodrigobisppo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-amber-100 hover:text-pink-500 transition duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
