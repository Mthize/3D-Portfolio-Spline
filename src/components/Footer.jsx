import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    /* Footer Section - Changed mt-40 to mt-auto */
    <footer className="bg-black text-white py-16 px-6 mt-auto relative z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h2
            className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 
            bg-clip-text text-transparent"
          >
            Thapelo DeCode
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">
              Connect
            </h3>
            {/*  Social Icons */}
            <div className="flex space-x-4">
              <a
                className="text-white hover:text-violet-500 transition-colors"
                href="#"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                className="text-white hover:text-violet-500 transition-colors"
                href="#"
              >
                <FiTwitter className="w-5 h-5" />
              </a>

              <a
                className="text-white hover:text-violet-500 transition-colors"
                href="#"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Thapelo DeCode. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              clssName="text-gray-600 hover:text-white text-sm transition-colors"
              href="#"
            >
              Privacy Policy
            </a>

            <a
              clssName="text-gray-600 hover:text-white text-sm transition-colors"
              href="#"
            >
              Terms of Service
            </a>

            <a
              clssName="text-gray-600 hover:text-white text-sm transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
