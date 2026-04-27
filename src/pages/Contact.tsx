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
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get('name') || '';
                const phone = fd.get('phone') || '';
                const email = fd.get('email') || '';
                const service = fd.get('service') || '';
                const message = fd.get('message') || '';
                const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service}%0A%0AMessage:%0A${message}`;
                window.location.href = `mailto:info@bogatahealthclinic.com?subject=Appointment Request — ${service}&body=${body}`;
              }}
            >
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Jane Smith"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 903-555-0000"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. jane@email.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Service Needed</label>
                <select name="service" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light appearance-none">
                  <option>BioTE Hormone Therapy</option>
                  <option>Prenatal Care</option>
                  <option>Well-Woman Exam</option>
                  <option>Thyroid Management</option>
                  <option>Family Planning</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
          <iframe
            title="Bogata Health Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1180032606567!2d-95.2143976!3d33.4722784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864a70304e5aa0a3%3A0x865ee5af065b7396!2s106%202nd%20St%20NW%2C%20Bogata%2C%20TX%2075417!5e0!3m2!1sen!2sus!4v1777315984716!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
