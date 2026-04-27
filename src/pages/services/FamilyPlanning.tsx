import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Info, Calendar, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyPlanning() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Family Planning & <br />
            <span className="text-primary italic">Women&apos;s Health</span>
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1631217818242-a7c36a44c77c?auto=format&fit=crop&q=80&w=1200"
              alt="Consultation meeting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Empowering women to make informed decisions about their reproductive health is a core priority at Bogata Health Clinic. We provide non-judgmental, expert guidance on all aspects of family planning.
            </p>

            <h2 className="text-3xl font-light text-slate-900">Your Choices, Your Future</h2>
            <p>
              Whether you are looking to start a family soon or want to delay pregnancy, we offer a range of services and education to help you choose the path that is right for your unique life circumstances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 NOT-prose">
              {[
                { title: 'Contraception', icon: ShieldCheck, desc: 'Discussion and prescription of various birth control methods.' },
                { title: 'Preconception', icon: Calendar, desc: 'Health optimization before you conceive.' },
                { title: 'STD Testing', icon: Info, desc: 'Confidential screenings and treatment for peace of mind.' },
                { title: 'Counseling', icon: CheckCircle, desc: 'Clear, compassionate answers to your reproductive health questions.' },
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-neutral rounded-3xl">
                  <div className="text-primary mb-4">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm font-light text-slate-500">{feature.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-light text-slate-900">What We Discuss</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>Birth control options (pills, injections, and long-term methods).</li>
              <li>Natural family planning techniques and fertility awareness.</li>
              <li>Menstrual cycle regularities and reproductive health concerns.</li>
              <li>Preparing your body for a healthy pregnancy.</li>
              <li>Confidential sexual health screenings and education.</li>
            </ul>

            <h2 className="text-3xl font-light text-slate-900">Confidential & Caring</h2>
            <p>
              We pride ourselves on creating a safe space for women of all ages. Your privacy is paramount, and our goal is to ensure you have the medical facts needed to make decisions that align with your personal values and health goals.
            </p>
          </div>

          <div className="mt-20 p-12 bg-primary rounded-[3rem] text-center text-white">
            <h2 className="text-3xl font-light mb-6">Plan Your Path with Confidence</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              Schedule a private consultation to discuss your reproductive health and family planning options.
            </p>
            <a
              href="tel:903-632-0078"
              className="inline-block bg-white text-primary px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Speak with Mary Lynn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
