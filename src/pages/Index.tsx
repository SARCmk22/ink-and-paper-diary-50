
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="py-6 px-4 md:px-6 border-b border-gray-800">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <a 
              href="https://futureaidirectory.com" 
              className="text-lg font-medium gold-text"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Future AI Directory
            </a>
            <div className="flex space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-md bg-gray-900 font-medium transition-colors gold-text"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-white"
              >
                Blog
              </Link>
              <a 
                href="https://solutions.futureaidirectory.com" 
                className="px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Prompt Directory
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center bg-black">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight gold-text">
              Unlock the Full Potential of AI
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Learn how advanced prompt engineering techniques can transform your productivity and efficiency.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 hover:bg-gray-800 h-10 px-8 py-6 text-sm font-medium transition-colors gold-text border border-[#D4AF37]"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm bg-black">
        <div className="container px-4 md:px-6">
          <p>© 2025 Future AI Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
