import Heroimg from '../assets/hero.png';
import Contact from './Contact';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row px-5 py-20 bg-secondary">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-white text-7xl font-heiro-font leading-tight">
          Hi, <br />
          I'm AMAL MANOJ
          <p className="text-2xl mt-4">Trying to be a Full-stack developer</p>
        </h1>

        <div className="flex gap-6 py-8">
          <a
            className="hover:text-white text-gray-400"
            href="https://github.com/maayavii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={30} />
          </a>
          <a
            className="hover:text-white text-gray-400"
             href="https://www.linkedin.com/in/amal-manoj-2a858b211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin size={30} />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <a
            href="amalmanoj3300@gmail.com" // Replace with the actual ID of your contact section
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="https://wa.me/916235423300?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you." // Replace with the actual ID of your contact section
            className="px-6 py-3 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section */}
      <img className="md:w-1/3 py-10 md:py-0" src={Heroimg} alt="Hero" />
    </section>
  );
}
