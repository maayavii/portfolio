export default function Skills() {
    const technicalSkills = [
      { name: 'Python', icon: '🐍', level: 'Expert' },
      { name: 'Django', icon: '🌐', level: 'Proficient' },
      { name: 'HTML', icon: '📄', level: 'Expert' },
      { name: 'CSS', icon: '🎨', level: 'Proficient' },
      { name: 'JavaScript', icon: '✨', level: 'Intermediate' },
      { name: 'React', icon: '⚛️', level: 'Intermediate' },
      { name: 'SQL', icon: '🗃️', level: 'Intermediate' },
      { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
      { name: 'JAVA', icon: '♨️', level: 'Intermediate' },
      { name: 'Tailwind', icon: '༄', level: 'Proficient' },
    ];
  
    const softSkills = [
      { name: 'Teamwork', icon: '🤝', level: 'Expert' },
      { name: 'Problem Solving', icon: '🧠', level: 'Expert' },
      { name: 'Time Management', icon: '⏰', level: 'Proficient' },
      { name: 'Communication', icon: '💬', level: 'Proficient' },
      { name: 'Adaptability', icon: '🔄', level: 'Intermediate' },
      { name: 'Leadership', icon: '👑', level: 'Proficient' },
      { name: 'Customer Handiling', icon: '👥👥', level: 'Proficient' },
    ];
  
    const certifications = [
      { name: 'React Developer Certification', issuer: 'Udemy', date: '2023' },
      { name: 'Python for Data Science', issuer: 'Coursera', date: '2022' },
      { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', date: '2021' },
      { name: 'Database Managment System', issuer: 'IIT Kharagpur', date: '2024' },
      // Add more certifications as needed
    ];
  
    return (
      <section id="skills" className="flex flex-col items-center px-5 py-20 bg-primary text-white">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h1 className="text-6xl font-heiro-font border-b-4 border-blue-500 inline-block mb-5">
            Skills
          </h1>
          <p className="text-lg text-gray-300">
            A collection of my technical and soft skills with proficiency levels.
          </p>
        </div>
  
        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-secondary rounded-lg shadow-lg hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
              <p className="mt-2 text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
  
        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-secondary rounded-lg shadow-lg hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
              <p className="mt-2 text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
  
        {/* Certifications Section */}
        <div className="w-full bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center text-blue-500 font-semibold mb-6">Certifications</h2>
          <ul className="space-y-4">
            {certifications.map((certification, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-semibold text-gray-100">{certification.name}</span> -{' '}
                <span className="text-gray-400">{certification.issuer}</span> ({certification.date})
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  