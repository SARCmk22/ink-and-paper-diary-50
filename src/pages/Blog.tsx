
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 'chatgpt-vs-claude',
      title: 'ChatGPT vs. Claude: The Definitive Comparison for Business Users in 2025',
      description: 'Is your business using the wrong AI model? Our comprehensive analysis reveals which leading AI assistant delivers 37% better results for specific business functions. The answer might surprise you.',
      image: '/lovable-uploads/c29424c1-fb4d-4c7c-ab38-ff5ad5fa2656.png',
    },
    {
      id: 'ai-image-generation',
      title: 'The Complete Guide to AI Image Generation Prompts for Marketing',
      description: 'Transform Your Visual Content Strategy with our structured AI image prompting framework that helped an e-commerce brand increase engagement by 217%.',
      image: '/lovable-uploads/c29424c1-fb4d-4c7c-ab38-ff5ad5fa2656.png',
    },
    {
      id: 'advanced-prompting-techniques',
      title: '7 Advanced Prompting Techniques That Transform Productivity',
      description: 'Discover the prompting techniques that reduce error rates by 47% in financial analysis and improve output quality by 53% for specialized tasks.',
      image: '/lovable-uploads/c29424c1-fb4d-4c7c-ab38-ff5ad5fa2656.png',
    },
    {
      id: 'prompt-engineering-guide',
      title: 'The Ultimate Guide to AI Prompt Engineering for Business Growth in 2025',
      description: 'Discover how proper prompt engineering can transform your AI interactions and boost productivity by up to 300%.',
      image: '/lovable-uploads/c29424c1-fb4d-4c7c-ab38-ff5ad5fa2656.png',
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogNav />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 gold-text">AI Insights Blog</h1>
          <p className="text-gray-400 text-lg max-w-3xl mb-12">
            Expert strategies and analysis for maximizing your AI investments and staying ahead in the rapidly evolving AI landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.id}`}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="h-16 w-16" 
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-3 gold-text">{blog.title}</h2>
                  <p className="text-gray-400 mb-4 flex-grow">{blog.description}</p>
                  <div className="flex justify-end">
                    <span className="text-[#D4AF37] font-medium">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
