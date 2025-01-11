import Myresume from "../assets/Amal.pdf";  // Import the file correctly

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary py-10">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">Contact Me</h1>
        <ul className="space-y-4">
          {/* Email */}
          <li>
            <span className="font-semibold text-gray-600">Email: </span>
            <a
              href="mailto:amalmanoj3300@gmail.com"
              className="text-blue-500 hover:underline"
            >
              amalmanoj3300@gmail.com
            </a>
          </li>

          {/* Phone */}
          <li>
            <span className="font-semibold text-gray-600">Phone: </span>
            <a
              href="tel:+916235423300"
              className="text-blue-500 hover:underline"
            >
              +916235423300
            </a>
          </li>

          {/* GitHub */}
          <li>
            <span className="font-semibold text-gray-600">GitHub: </span>
            <a
              href="https://github.com/maayavii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/maayavii
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <span className="font-semibold text-gray-600">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/amal-manoj-2a858b211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/amal-manoj-2a858b211/
            </a>
          </li>
        </ul>

        {/* Resume Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Download My Resume</h2>
          <a
            href={Myresume}  // Use the imported PDF here
            download="Amal_Manoj_Resume.pdf"
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
