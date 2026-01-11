
import React from 'react';
import { Target, Filter, Headphones, MessageSquare, CheckCircle2 } from 'lucide-react';

const ServiceSection: React.FC<{
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  reverse?: boolean;
}> = ({ id, icon, title, subtitle, description, points, reverse }) => (
  <section id={id} className={`py-24 border-b border-zinc-100 ${reverse ? 'bg-blue-50/50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        <div className="flex-1">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-900 text-amber-400 uppercase tracking-widest mb-6">
            Core Service
          </div>
          <div className="mb-6">{icon}</div>
          <h2 className="text-3xl font-extrabold text-blue-950 mb-2">{title}</h2>
          <h3 className="text-lg font-medium text-amber-600 mb-6">{subtitle}</h3>
          <p className="text-zinc-600 mb-8 leading-relaxed">{description}</p>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-900 mr-3 mt-0.5 shrink-0" />
                <span className="text-zinc-700 text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 w-full">
           <div className="bg-blue-950 aspect-video rounded-sm overflow-hidden relative shadow-2xl border-b-8 border-amber-500">
             <img 
              src={`https://picsum.photos/seed/${id}/800/450`} 
              alt={title}
              className="w-full h-full object-cover opacity-50 grayscale"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-sm border border-white/20">
                   <p className="text-white text-xs font-mono uppercase tracking-[0.2em]">{id} // System-Active</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBooking'));
  };

  return (
    <div>
      {/* Intro */}
      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Manufacturing <span className="text-amber-400">System</span></h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Each component is designed to solve a specific bottleneck in the manufacturing sales cycle.
          </p>
        </div>
      </section>

      <ServiceSection 
        id="lead-gen"
        icon={<Target className="h-12 w-12 text-amber-500" />}
        title="Local Manufacturing Lead Generation"
        subtitle="Be found by the right buyers."
        description="We focus on search intent. When an industrial buyer needs a shop, we ensure your business is the most prominent option in their area. We deploy sophisticated search strategies to ensure you capture the highest value traffic from prospects ready to quote."
        points={[
          "Google Search Ads targeting high-intent 'buyer' keywords for your specific capabilities",
          "Google Competitor Ads to capture interest from buyers searching for your rivals",
          "Dynamic Keyword strategies that adapt to exactly what the prospect is searching for",
          "Dedicated landing pages built for every buyer keyword to maximize conversion rates"
        ]}
      />

      <ServiceSection 
        id="qual-funnels"
        icon={<Filter className="h-12 w-12 text-amber-500" />}
        title="Pre-Qualification Quiz Funnels"
        subtitle="Stop quoting jobs that aren't a fit."
        description="Not every lead is a good lead. Our intake process asks the questions you would normally ask on a 15-minute call."
        points={[
          "Filter by Material (Steel, Aluminum, Exotics)",
          "Filter by Job Size (Proto vs. Production)",
          "Verify drawings availability (STEP, DXF)",
          "Set realistic budget expectations"
        ]}
        reverse
      />

      <ServiceSection 
        id="call-intake"
        icon={<Headphones className="h-12 w-12 text-amber-500" />}
        title="24/7 Call Intake Assistant"
        subtitle="Your shop doesn't stop, neither does your sales."
        description="Our automated voice assistant handles inquiries with intelligence, ensuring every potential client is qualified professionally."
        points={[
          "Never miss a call after hours",
          "Automatically logs job details to CRM",
          "Identifies urgent rush jobs instantly",
          "Professional industrial-grade response"
        ]}
      />

      <ServiceSection 
        id="chat-intake"
        icon={<MessageSquare className="h-12 w-12 text-amber-500" />}
        title="Website Chat Intake"
        subtitle="Engage buyers who prefer digital first."
        description="Modern agents prefer chat. Our assistant handles these instantly, providing a seamless qualification path."
        points={[
          "Instant engagement for visitors",
          "Collects job-critical data automatically",
          "Filters low-quality noise away",
          "Direct SMS alerts for 'Hot Leads'"
        ]}
        reverse
      />

      {/* Final Call */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-950 mb-8 uppercase tracking-tight">Ready for a Better Lead Flow?</h2>
          <button 
            onClick={openBooking}
            className="inline-block bg-blue-900 text-white px-10 py-5 rounded-sm text-lg font-bold hover:bg-blue-800 transition-all shadow-lg border-b-4 border-amber-500"
          >
            Book Your Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
