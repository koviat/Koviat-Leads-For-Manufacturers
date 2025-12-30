
import React from 'react';
import { ChevronRight, Clock, Tag, CheckCircle2 } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: '5',
      title: "The Rise of the Multi-Skilled Media Buyer in Manufacturing",
      excerpt: "Running ads is easy. Running a system that combines Google, Bing, quiz funnels, and social media is what separates the shops that struggle from the shops that scale.",
      date: "Oct 20, 2024",
      category: "Media Buying",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: '1',
      title: "Why Most CNC Shops Waste 20+ Hours a Week on Bad Quotes",
      excerpt: "Learn how to spot 'tire kickers' early in the process and save your estimator's time for the big wins.",
      date: "Oct 12, 2024",
      category: "Efficiency",
      image: "https://picsum.photos/seed/cnc_blog/800/500"
    },
    {
      id: '2',
      title: "The Shift in Manufacturing Procurement",
      excerpt: "The rolodex is dead. Modern procurement managers are using search engines and mobile devices. Is your shop visible?",
      date: "Oct 5, 2024",
      category: "Market Trends",
      image: "https://picsum.photos/seed/procure_blog/800/500"
    },
    {
      id: '3',
      title: "Automating the First Contact",
      excerpt: "Statistics show that the first shop to respond professionally usually wins the bid. Here's how to automate that response.",
      date: "Sep 28, 2024",
      category: "Automation",
      image: "https://picsum.photos/seed/auto_blog/800/500"
    },
    {
      id: '4',
      title: "5 Common Mistakes in Local SEO",
      excerpt: "Are you targeting the right service area? Most shops either target too wide or too narrow. Let's fix it.",
      date: "Sep 15, 2024",
      category: "Lead Gen",
      image: "https://picsum.photos/seed/local_blog/800/500"
    }
  ];

  return (
    <div className="bg-white">
      {/* Blog Hero */}
      <section className="bg-blue-50 py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-6 uppercase tracking-tight">Manufacturing <span className="text-amber-600">Growth</span> Insights</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Strategies for industrial businesses looking to improve lead quality and close rates.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group border border-zinc-200 rounded-sm overflow-hidden flex flex-col bg-white hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center space-x-4 mb-4 text-xs font-bold text-blue-900 uppercase tracking-widest">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1 text-amber-500" /> {post.date}</span>
                    <span className="flex items-center"><Tag className="h-3 w-3 mr-1 text-amber-500" /> {post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-800 transition-colors">{post.title}</h2>
                  <div className="text-zinc-600 text-sm leading-relaxed mb-6 space-y-4">
                    {post.id === '5' ? (
                      <>
                        <p>
                          In today's competitive industrial landscape, relying on a single channel is no longer enough. Manufacturers require a <strong>specialized media buyer</strong> who understands the intricate ecosystem of modern industrial procurement.
                        </p>
                        <div className="bg-blue-50 p-4 border-l-4 border-amber-500 my-4 space-y-3">
                          <h4 className="font-bold text-blue-900 uppercase text-xs tracking-widest">Why Specialization Matters:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                              <span><strong>Google & Bing Ads Mastery:</strong> Buyers aren't just on Google. High-value procurement managers often utilize Bing via corporate networks. You need to be visible everywhere intent lives.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                              <span><strong>Qualification Quiz Funnels:</strong> Driving traffic is easy; filtering it is hard. A multi-skilled buyer builds funnels that qualify by material, volume, and budget before a lead ever reaches your sales team.</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                              <span><strong>Social Media Authority:</strong> Consistent social presence builds trust. It proves your shop is active, equipped, and reliable.</span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          <strong>Koviat Leads</strong> possesses the full spectrum of these skills in-house. We don't just "run ads"—we install a holistic acquisition machine that masters Google, Bing, Social, and intelligent Funnels to deliver only the highest-quality manufacturing opportunities.
                        </p>
                      </>
                    ) : (
                      <p>{post.excerpt}</p>
                    )}
                  </div>
                  <button className="text-blue-900 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read Full Case Study <ChevronRight className="ml-1 h-4 w-4 text-amber-500" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6 uppercase tracking-tight">Stay Ahead of the Competition</h2>
          <p className="text-blue-200 mb-10">Get our latest insights on industrial marketing delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Work Email" 
              className="flex-grow bg-blue-900 border border-blue-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500"
            />
            <button className="bg-amber-500 text-blue-950 font-bold px-8 py-3 rounded-sm hover:bg-amber-400 transition-all uppercase tracking-widest text-sm">
              Join List
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
