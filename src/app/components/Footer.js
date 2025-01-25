import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-[10%] space-y-8">
       

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://twitter.com/AjeetSi10103029" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ajeet-singh-063978177/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/AjeetSingh2016" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500">
            <FaGithub size={30} />
          </a>
        </div>

         {/* Footer Content */}
         <div className="text-center">
          <p className="text-sm text-gray-400">© 2025 Ajeet Singh. All Rights Reserved.</p>
        </div>
      
      </div>
    </footer>
  );
}
