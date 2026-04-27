import { motion } from 'motion/react';
import { ArrowLeft, Shield, User, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WellWoman() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Annual <br />
            <span className="text-primary italic">Well-Woman Exams</span>
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
              alt="Medical exam setting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Preventative care is the cornerstone of long-term health. Our annual well-woman exams are comprehensive, patient-focused check-ups designed specifically for women at every stage of life.
            </p>

            <h2 className="text-3xl font-light text-slate-900">What is Included?</h2>
            <p>
              A typical visit includes a thorough discussion of your health history, a physical exam, and specific screenings based on your age and health needs. We aim to make these visits as comfortable and informative as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 NOT-prose">
              {[
                { title: 'Clinical Exams', icon: Shield, desc: 'Comprehensive breast and pelvic exams to detect abnormalities early.' },
                { title: 'Pap Smears', icon: FileText, desc: 'Cervical cancer screenings and HPV testing as recommended.' },
                { title: 'Health Counseling', icon: User, desc: 'Discussing lifestyle, nutrition, and any new symptoms or concerns.' },
                { title: 'Lab Orders', icon: Activity, desc: 'Ordering blood work, cholesterol checks, and other diagnostic tests.' },
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

            <h2 className="text-3xl font-light text-slate-900">Why It Matters</h2>
            <p>
              Many conditions, including early-stage cancers and cardiovascular issues, may not present symptoms initially. Regular well-woman exams allow us to catch these issues early when they are most treatable. We also use this time to update your immunizations and review your birth control or family planning needs.
            </p>

            <div className="bg-neutral p-10 rounded-[2rem] border border-slate-100 my-12 italic text-center">
              &ldquo;Your annual exam is your time to ask questions, share concerns, and take charge of your wellness journey in a safe environment.&rdquo;
            </div>

            <h2 className="text-3xl font-light text-slate-900">Preparing for Your Visit</h2>
            <p>
              Try to schedule your appointment for a time when you are not on your menstrual period. Prepare a list of any medications you are currently taking and any specific concerns or symptoms you&apos;ve experienced since your last visit.
            </p>
          </div>

          <div className="mt-20 p-12 bg-slate-100 rounded-[3rem] text-center">
            <h2 className="text-3xl font-light mb-6 text-slate-900">Book Your Annual Exam</h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
              Preventative care is a gift you give to your future self. Schedule your check-up today.
            </p>
            <a
              href="tel:903-632-0078"
              className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Call 903-632-0078
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
