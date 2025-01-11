import Aboutimg from '../assets/about.png'; // About image
import resume from '../assets/Amal.pdf'; // Resume file

export default function About() {
  // Function to open the resume in a new tab
  const openResume = () => {
    window.open(resume, '_blank'); // Opens the resume in a new tab
  };

  return (
    <section id="about" className='flex flex-col md:flex-row py-3 bg-primary'>
      <div className='w-1/2'>
        {/* Image with click event to open resume */}
        <img 
          className='md:w-1/ py-20 cursor-pointer' 
          src={Aboutimg} 
          alt="About Me"
          onClick={openResume} 
        />
        <h8 className='py-10 text-start text-blue-800'>click the image to download the Resume</h8>
      </div>
      <div className='w-1/3 flex text-white text-2xl'>
        <div className='flex flex-col justify-center px-4 md:px-2'>
        <h1 className='text-6xl font-heiro-font border-b-4 border-primary mb-5 w-[280px]'>
  <span className="text-white">About</span>{' '}
  <span className="text-blue-800">Me</span>
</h1>
 

          <p className='text-2xl'>
            Dynamic and detail-oriented Software Developer with expertise in Python, Django, HTML, CSS, and database systems like SQL and MongoDB.
          </p>
          <p className='py-2'>
            Skilled in full-stack development, troubleshooting, and software optimization.
          </p>
          <p className='py-2'>
            Currently pursuing a Master’s in Computer Applications (MCA) to deepen technical and managerial expertise.
          </p>
          <p className='py-2'>
            Proven experience in web application development, database management, and client relationship management.
          </p>
          <p className='py-2'>
            A proactive team player with exceptional problem-solving and communication skills, committed to delivering innovative software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
