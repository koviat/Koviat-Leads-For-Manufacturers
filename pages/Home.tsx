
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Clock, Filter, BarChart3, ChevronRight, CheckCircle2, Factory, Headphones, MessageCircle, PlayCircle, Target, Zap, Share2, Play } from 'lucide-react';

const Home: React.FC = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBooking'));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 border-b border-zinc-100">
        <div className="absolute inset-0 z-0 bg-blue-50 opacity-40">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-100 blur-3xl opacity-20 transform translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-900 text-amber-400 uppercase tracking-widest mb-6 border border-blue-800">
              Precision Lead Acquisition
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 leading-[1.1] mb-8">
              We Help Manufacturers Get More <span className="text-blue-800">Qualified</span> Clients
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              Pre-qualified job inquiries for fabrication, CNC, and industrial shops — without wasted calls, bad leads, or guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openBooking}
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm text-lg font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 border-b-4 border-amber-500"
              >
                Book a Free Strategy Call
                <ChevronRight className="ml-2 h-5 w-5 text-amber-400" />
              </button>
              <button 
                className="inline-flex items-center justify-center border-2 border-zinc-200 bg-white text-blue-900 px-8 py-4 rounded-sm text-lg font-bold hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-amber-500" />
                Hear the Intake Assistant Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Visual Decoration */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
           <img 
            src="https://picsum.photos/seed/factory1/800/600" 
            alt="Manufacturing Facility" 
            className="rounded-l-2xl shadow-2xl grayscale contrast-125 border-l-8 border-amber-500"
           />
        </div>
      </section>

      {/* Video Explanation Section */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                See How We Deliver <span className="text-amber-400">High-Precision</span> Lead Flow
              </h2>
              <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto lg:mx-0">
                In this 3-minute overview, we break down exactly how our system identifies, qualifies, and delivers your next big production job. No theory—just results.
              </p>
              <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium">How we target $50k+ contracts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium">Inside the automated qualification funnel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium">Live dashboard and ROI tracking demo</span>
                </li>
              </ul>
              <button 
                onClick={openBooking}
                className="inline-flex items-center justify-center bg-amber-500 text-blue-950 px-8 py-3 rounded-sm font-bold hover:bg-amber-400 transition-all uppercase tracking-widest text-sm"
              >
                Schedule Walkthrough
              </button>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-amber-500/20 rounded-sm blur group-hover:bg-amber-500/30 transition-all"></div>
                <div className="relative aspect-video rounded-sm overflow-hidden border border-blue-800 shadow-2xl bg-blue-900">
                  <img 
                    src="https://picsum.photos/seed/industrial-video/1280/720" 
                    alt="Video Overview Thumbnail" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-amber-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 ring-8 ring-blue-950/50">
                      <Play className="h-8 w-8 text-blue-950 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-950 to-transparent">
                    <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Case Study // System Deployment V2.4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 uppercase tracking-tight">The Modern Shop Owner's Dilemma</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm border-t-4 border-t-amber-500">
              <ShieldAlert className="h-10 w-10 text-red-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-blue-900">Missed Opportunities</h3>
              <p className="text-zinc-600 leading-relaxed">
                Valuable calls go to voicemail during shop hours or vanish after-hours when you're off the clock.
              </p>
            </div>
            <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm border-t-4 border-t-blue-900">
              <Filter className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-blue-900">Unqualified Noise</h3>
              <p className="text-zinc-600 leading-relaxed">
                Too many inquiries that don't fit your machines, your minimums, or your local service capability.
              </p>
            </div>
            <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm border-t-4 border-t-amber-500">
              <Clock className="h-10 w-10 text-blue-900 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-blue-900">Wasted Quoting Time</h3>
              <p className="text-zinc-600 leading-relaxed">
                Hours spent calculating quotes for "tire kickers" who aren't serious or don't have the budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-blue-950 leading-tight mb-6">
                A Complete Client Acquisition System Built for Manufacturers
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                We don't just "run ads." We install a high-precision system that captures, qualifies, and schedules the exact types of jobs your shop needs to grow.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Search-based lead generation", desc: "We target buyers who are actively searching for your specific machining or fabrication services." },
                  { title: "Pre-qualification funnels", desc: "Every inquiry goes through a filter before it ever touches your phone or inbox." },
                  { title: "Automated call & chat intake", desc: "Our 24/7 AI-driven assistants handle the initial discovery so you don't have to." },
                  { title: "Real-time visibility", desc: "A clean dashboard showing you exactly which jobs are worth your quoting time." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 bg-amber-500 text-blue-950 p-1 rounded-sm">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-lg transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-sm shadow-2xl border-r-8 border-amber-500">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                    alt="Precision Manufacturing Technology" 
                    className="w-full h-auto grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-950/80 backdrop-blur-md px-3 py-1 border border-amber-500/50 rounded-sm">
                       <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">Precision // V2.4 System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Target className="h-8 w-8 text-amber-500" />, 
                title: "Local Search Lead Gen", 
                desc: "Target buyers actively searching for manufacturing in your service area." 
              },
              { 
                icon: <Filter className="h-8 w-8 text-amber-500" />, 
                title: "Pre-Qual Quiz Funnels", 
                desc: "Short, structured quizzes that filter by job type, size, and timeline." 
              },
              { 
                icon: <Headphones className="h-8 w-8 text-amber-500" />, 
                title: "24/7 Call Intake", 
                desc: "Never miss a call. Our assistant answers, qualifies, and logs details." 
              },
              { 
                icon: <MessageCircle className="h-8 w-8 text-amber-500" />, 
                title: "Website Chat Intake", 
                desc: "Engage visitors immediately and filter out poor-fit inquiries automatically." 
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-blue-900/50 p-8 border border-blue-800 hover:border-amber-500 transition-all rounded-sm group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section (Scarcity) */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-blue-900 p-10 md:p-16 relative shadow-2xl">
            <div className="absolute top-0 right-0 bg-amber-500 text-blue-900 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              Limited Opportunity
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-900 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
                Limited-Time Bonus for New Partners
              </h2>
              <p className="text-xl text-zinc-600 mb-10">
                For a limited time, new clients receive <span className="font-bold text-blue-900 underline decoration-amber-400">2 months free</span> of our premium success suite:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                <div className="flex flex-col p-6 bg-blue-50 rounded-sm border-t-4 border-blue-900">
                  <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-2">24/7 Call Intake</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">Every inbound call answered and pre-qualified instantly, 24/7.</p>
                  </div>
                </div>
                <div className="flex flex-col p-6 bg-blue-50 rounded-sm border-t-4 border-blue-900">
                  <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-2">Web Chat Intake</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">Filters website inquiries automatically before you see them.</p>
                  </div>
                </div>
                <div className="flex flex-col p-6 bg-blue-50 rounded-sm border-t-4 border-blue-900">
                  <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                    <Share2 className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-2">Daily Social Media</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">Consistent daily postings to keep your shop top-of-mind with buyers.</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={openBooking}
                className="inline-block bg-blue-900 text-white px-10 py-5 rounded-sm text-lg font-bold hover:bg-blue-800 transition-all shadow-xl border-b-4 border-amber-500"
              >
                Claim This Bonus Offer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 uppercase tracking-tight">The Koviat Advantage</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Only Speak with Qualified Prospects", desc: "No more spending an hour on the phone with someone who just wants a 'one-off bracket' for $20." },
              { title: "Reduce Wasted Quotes", desc: "Our system filters by job size and timeline, so your estimators focus only on high-value wins." },
              { title: "Protect Owner Time", desc: "Stop answering sales calls while you're trying to manage production or staff." },
              { title: "Capture After-Hours Demand", desc: "Most buyers research at night. Our automated systems capture them while your competitors sleep." },
              { title: "Increase Close Rates", desc: "Speed to lead is critical. Our instant response system ensures you're the first shop to reply." },
              { title: "Predictable Local Lead Flow", desc: "Build a reliable pipeline in your own backyard rather than chasing distant low-margin work." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="h-10 w-10 bg-blue-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <span className="text-white group-hover:text-blue-900 font-bold font-mono text-sm">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-950">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-blue-900/50 grayscale opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight">
            Let's Build a Smarter Way to Win <span className="text-amber-400">Clients</span>
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Stop letting bad leads drain your energy. Install a precision system built for the way you do business.
          </p>
          <button 
            onClick={openBooking}
            className="inline-flex items-center justify-center bg-white text-blue-950 px-10 py-5 rounded-sm text-xl font-bold hover:bg-zinc-100 transition-all shadow-2xl border-b-4 border-amber-500"
          >
            Book a Free Strategy Call
            <ChevronRight className="ml-2 h-6 w-6 text-amber-500" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
