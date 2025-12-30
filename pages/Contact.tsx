
import React from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const whatsappUrl = "https://wa.me/233244446682?text=I%20would%20like%20to%20work%20with%20Koviat%20Leads%20for%20Manufacturers";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBooking'));
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-blue-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 underline decoration-amber-400 decoration-4">Let's Discuss Growth.</h1>
          <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
            Stop wasting time on bad leads. Contact us for a direct conversation about building a smarter system for your shop.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-sm shadow-sm border-t-8 border-blue-900">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">First Name</label>
                        <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">Last Name</label>
                        <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">Business Email</label>
                      <input type="email" required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">Shop Type</label>
                      <select className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:border-amber-500 transition-colors">
                        <option>CNC Machining</option>
                        <option>Metal Fabrication</option>
                        <option>Welding Services</option>
                        <option>Industrial Repair</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-sm flex items-center justify-center hover:bg-blue-800 transition-all shadow-md border-b-4 border-amber-500">
                      Send Inquiry <Send className="ml-2 h-4 w-4 text-amber-400" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Inquiry Received</h3>
                    <p className="text-zinc-600 mb-8 leading-relaxed">
                      One of our team members will review your shop and contact you within 1 business day.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-6 border-l-4 border-blue-900 pl-4">Contact Details</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <MessageCircle className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <div className="font-bold text-blue-950">Direct WhatsApp</div>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-blue-900 transition-colors underline decoration-amber-200"
                        >
                          Message Us Directly
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <div className="font-bold text-blue-950">Email</div>
                        <div className="text-zinc-500">contact@koviatleads.com</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-950 p-8 text-white rounded-sm border-r-4 border-amber-500">
                  <h4 className="text-xl font-bold mb-4">Quick strategy call?</h4>
                  <p className="text-sm text-blue-200 mb-6 leading-relaxed">
                    Skip the form and jump on a 15-minute call.
                  </p>
                  <button 
                    onClick={openBooking}
                    className="w-full bg-amber-500 text-blue-950 font-bold py-3 rounded-sm hover:bg-amber-400 transition-all text-sm uppercase tracking-widest"
                  >
                    Open Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
