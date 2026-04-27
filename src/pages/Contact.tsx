import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-light mb-8 text-slate-900 leading-tight">
              We&apos;re Here to <span className="text-primary italic">Listen & Help</span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
              Whether you have a question about our services or are ready to book your first appointment, we look forward to hearing from you.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Phone Number</h4>
                  <p className="text-slate-500 font-light">Direct Line: <a href="tel:903-632-0078" className="hover:text-primary transition-colors">903-632-0078</a></p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Visit Our Clinic</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    106 2nd St NW<br />
                    Bogata, TX 75417
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Office Hours</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Monday – Thursday: 8:00 AM – 5:00 PM<br />
                    Friday: 8:00 AM – 12:00 PM<br />
                    <span className="text-primary italic">Closed Saturday & Sunday</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-light mb-8 text-slate-900 italic">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Your Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jane Smith"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 555-555-5555"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. jane@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light appearance-none">
                  <option>BioTE Hormone Therapy</option>
                  <option>Prenatal Care</option>
                  <option>Well-Woman Exam</option>
                  <option>Thyroid Management</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light resize-none"
                />
              </div>

              <button 
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Area Placeholder */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden flex items-center justify-center text-slate-400 border border-slate-200">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="font-medium">Map Embed for 106 2nd St NW, Bogata, TX 75417</p>
            <p className="text-sm">Bogata Health Clinic location visualization</p>
          </div>
        </div>
      </section>
    </div>
  );
}
