
import React from 'react';
import { Factory, ShieldCheck, Zap, Briefcase, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Sub-Hero */}
      <section className="bg-blue-50 py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 underline decoration-amber-400 decoration-4">Built for the Shop Floor.</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Koviat Leads For Manufacturers doesn't do "general marketing." We specialize exclusively in the industrial sector, helping shops build systems that actually work for their specific machines and markets.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-500 -z-10 rounded-sm"></div>
                <img 
                  src="https://picsum.photos/seed/industrial_about/800/800" 
                  alt="CNC Machine Workspace" 
                  className="rounded-sm shadow-xl grayscale contrast-125"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-blue-950 mb-6 uppercase tracking-tight">Our Philosophy: Systems, Not Hype</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                  Most marketing agencies talk about "brand awareness" and "engagement." If you're running a CNC shop or a metal fabrication facility, you don't need likes—you need purchase orders.
                </p>
                <p>
                  Koviat was founded on the belief that manufacturing lead generation should be as precise as the tolerances on your machine floor. We respect how manufacturing businesses actually operate.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="p-4 bg-zinc-50 border-l-4 border-amber-500">
                  <div className="text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold mt-1">Industrial Focus</div>
                </div>
                <div className="p-4 bg-zinc-50 border-l-4 border-blue-900">
                  <div className="text-3xl font-bold text-blue-900">U.S.</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold mt-1">Based Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">Why Manufacturers Trust Us</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500">
                <ShieldCheck className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Fluff, No Buzzwords</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                We speak your language. We know the difference between MIG and TIG, or 3-axis and 5-axis.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500">
                <Target className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Focus on Local Area</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Most manufacturing jobs have logical shipping limits. We target the buyers in your region.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Owner-Focused</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Our tools work in the background so you can stay focused on the work that generates revenue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
