import profileImage from '../assets/images/profile.webp';
import logo from '../assets/images/logo.webp';

export function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-[8px]">
              <img
                src={logo}
                alt="Logo"
                className="rounded-full w-16 h-16 object-cover"
              />
              <div className="text-2xl font-bold text-gray-800">
                Manoj Kumar
              </div>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-800 font-bold hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-800 font-bold hover:text-blue-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-800 font-bold hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-800 font-bold hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-col h-full w-full overflow-auto">
        {/* About Me Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mb-6 mx-auto"
            />
            <p className="text-gray-600 leading-relaxed">
              Hi, I'm John Doe, a passionate React JS developer with over 3
              years of experience in building modern web applications. I
              specialize in creating responsive, user-friendly interfaces using
              React, Tailwind CSS, and other cutting-edge technologies. I love
              solving complex problems and turning ideas into reality through
              code.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  React JS
                </h3>
                <p className="text-gray-600">
                  Building dynamic and responsive user interfaces.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600">
                  Creating beautiful and responsive designs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  JavaScript
                </h3>
                <p className="text-gray-600">
                  Writing clean and efficient code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  E-Commerce Website
                </h3>
                <p className="text-gray-600">
                  A fully functional e-commerce platform built with React and
                  Node.js.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Portfolio Website
                </h3>
                <p className="text-gray-600">
                  A personal portfolio website showcasing my skills and
                  projects.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Task Management App
                </h3>
                <p className="text-gray-600">
                  A task management application to organize daily tasks
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact</h2>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-600">
              © 2023 John Doe. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
