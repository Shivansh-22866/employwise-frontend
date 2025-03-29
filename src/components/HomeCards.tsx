// components/HomeCards.tsx
import { CodeBracketIcon, CommandLineIcon, GlobeAltIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const HomeCards = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          EmployWise Assignment
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* GitHub Card */}
          <div className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
            {/* Adjusting the background div */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <CodeBracketIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Source Code</h3>
            <p className="text-gray-400 mb-4">
            Explore the complete source code on GitHub. Feel free to clone, fork, or contribute!
            </p>
            <a
            href="https://github.com/Shivansh-22866/employwise-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors text-white"
            >
            <CommandLineIcon className="h-5 w-5 mr-2" />
            View Repository
            </a>
        </div>

          {/* Developer Card */}
          <div className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <UserCircleIcon className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Shivansh Pandey</h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about building beautiful and functional applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Shivansh-22866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Socials Card */}
          <div className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-pink-400 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <GlobeAltIcon className="h-12 w-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>
            <p className="text-gray-400 mb-4">
              Let's connect! Find me on various platforms and check out my other projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shivansh-pandey-5a6319282?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:shivanshp0418@gmail.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;