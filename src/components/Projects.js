import React, { useState } from "react";
import websiteimg from "../assets/ecom1.png"; // Sample image
import websiteimg2 from "../assets/ecom2.png"; 
import websiteimg3 from "../assets/ecom3.png"; 
import websiteimg4 from "../assets/ecom4.png"; 
import bus1 from "../assets/bus1.png"; 
import bus2 from "../assets/bus2.png"; 
import bus3 from "../assets/bus3.png"; 
import bus4 from "../assets/bus4.png"; 
import mbc1 from "../assets/mbc1.png"; 
import mbc2 from "../assets/mbc2.png"; 
import mbc3 from "../assets/mbc3.png"; 
import mbc4 from "../assets/mbc4.png"; 
import mbc5 from "../assets/mbc5.png"; 
import mbc6 from "../assets/mbc6.png"; 


export default function Projects() {
    const [fullscreenMedia, setFullscreenMedia] = useState(null);
    const [descriptionPopup, setDescriptionPopup] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Bus Seat Booking Web Application",
            media: [
                { type: "image", src: bus1 },
                { type: "image", src: bus2 },
                { type: "image", src: bus3 },
                { type: "image", src: bus4 },
            ],
            description: `
Technologies: 
    MERN Stack (MongoDB, Express, React, Node.js)

A platform for users to browse, purchase, and manage their orders online.

Key Features:

  • User-friendly product search with 
    sorting and filtering options.

   • Secure payment integration 
        with automated email receipts.

    • Admin dashboard for managing 
         inventory, orders, and customers.

    • Mobile-responsive design 
      for seamless user experience.

Useful Links:
  • [GitHub Repository](https://github.com/maayavii/bus_booking.git)

      `,
        },
        {
            id: 2,
            title: "E-commerce Website",
            media: [
                { type: "image", src: websiteimg },
                { type: "image", src: websiteimg2 },
                { type: "image", src: websiteimg3 },
                { type: "image", src: websiteimg4 },
               
            ],
            description: `
Technologies: 
    MERN Stack (MongoDB, Express, React, Node.js)

A platform for users to browse, purchase, and manage their orders online.

Key Features:

  • User-friendly product search with 
    sorting and filtering options.

   • Secure payment integration 
        with automated email receipts.

    • Admin dashboard for managing 
         inventory, orders, and customers.

    • Mobile-responsive design 
      for seamless user experience.

Useful Links:
  • [GitHub Repository](https://github.com/maayavii/LifeCart.git)

      `,
        },
        {
            id: 3,
            title: "MBC-CONSTRUCTION SITE MANAGEMENT",
            media: [
                { type: "image", src: mbc1 },
                { type: "image", src: mbc2 },
                { type: "image", src: mbc3 },
                { type: "image", src: mbc4 },
                { type: "image", src: mbc5 },
                { type: "image", src: mbc6 },
            ],
            description: `
Technologies: 
    Python, Django, SQLite, HTML, CSS

A web application to monitor construction progress and daily expenses for clients.

Key Features:

  • Email alerts for updates/approvals.

  • Automatic progress tracking to display milestones dynamically.

  • A query section for clients to submit inquiries.

Useful Links:
  • [GitHub Repository](https://github.com/maayavii/constructionSiteManagment.git)

      `,
        },
    ];

    // Open fullscreen media
    const openFullscreen = (media) => {
        setFullscreenMedia(media);
    };

    // Close fullscreen media
    const closeFullscreen = () => {
        setFullscreenMedia(null);
    };

    // Open project description popup
    const openDescriptionPopup = (project) => {
        setDescriptionPopup(project);
    };

    // Close project description popup
    const closeDescriptionPopup = () => {
        setDescriptionPopup(null);
    };

    return (
        <section id="project" className="text-white px-5 py-20 bg-secondary">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h1 className="text-6xl font-heiro-font border-b-4 border-primary inline-block">
                    Projects
                </h1>
                <h3>Click on project titles for the project description and GitHub</h3>
            </div>

            {/* Projects Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-5 rounded-lg shadow-lg">
                        {/* Project Title */}
                        <h2
                            className="text-2xl font-bold mb-5 cursor-pointer hover:underline"
                            onClick={() => openDescriptionPopup(project)}
                        >
                            {project.title}
                        </h2>

                        {/* Project Media */}
                        <div className="grid grid-cols-2 gap-4">
                            {project.media.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative cursor-pointer"
                                    onClick={() => openFullscreen(item)}
                                >
                                    {item.type === "image" ? (
                                        <img
                                            src={item.src}
                                            alt={`Project ${project.id} Media ${index + 1}`}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            className="w-full h-auto rounded-lg"
                                            controls={false}
                                            muted
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Media Popup */}
            {fullscreenMedia && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        {fullscreenMedia.type === "image" ? (
                            <img
                                src={fullscreenMedia.src}
                                alt="Fullscreen Media"
                                className="w-full h-auto max-h-screen rounded-lg"
                            />
                        ) : (
                            <video
                                src={fullscreenMedia.src}
                                className="w-full h-auto max-h-screen rounded-lg"
                                controls
                                autoPlay
                            />
                        )}
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closeFullscreen}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}

            {/* Project Description Popup */}
            {descriptionPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white p-10 rounded-lg max-w-lg text-black relative popup-content">
                        <h2 className="text-2xl font-bold mb-5">{descriptionPopup.title}</h2>
                        <div className="overflow-y-auto max-h-96">
                            <pre className="text-lg whitespace-pre-wrap leading-7">
                                {descriptionPopup.description}
                            </pre>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-black text-2xl"
                            onClick={closeDescriptionPopup}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
