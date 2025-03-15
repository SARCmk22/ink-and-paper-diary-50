
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 md:px-6 border-b border-gray-100">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-medium">AI Prompt Engineering</div>
            <div className="flex space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-md bg-gray-100 font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Unlock the Full Potential of AI
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto">
              Learn how advanced prompt engineering techniques can transform your productivity and efficiency.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center rounded-md bg-black text-white hover:bg-gray-800 h-10 px-8 py-6 text-sm font-medium transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        <div className="container px-4 md:px-6">
          <p>© 2023 AI Prompt Engineering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
