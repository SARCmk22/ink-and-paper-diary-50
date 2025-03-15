
import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogNav from './BlogNav';

interface BlogPostProps {
  title: string;
  children: ReactNode;
}

const BlogPost = ({ title, children }: BlogPostProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogNav />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 gold-text">{title}</h1>
          
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800">
            <Link to="/blog" className="text-[#D4AF37] hover:underline">← Back to all articles</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
