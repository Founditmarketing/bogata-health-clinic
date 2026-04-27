import { motion } from 'motion/react';
import { ArrowLeft, Clock, ShieldCheck, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BioTE() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Bioidentical Hormone <br />
            <span className="text-primary italic">Replacement Therapy</span>
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
              alt="Hormone Therapy Consultation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Bogata Health Clinic is proud to offer <strong>BioTE Medical</strong> bioidentical hormone pellet therapy. Unlike synthetic hormones, BioTE uses plant-derived hormones that are molecularly identical to those produced naturally by your own body.
            </p>

            <h2 className="text-3xl font-light text-slate-900">What are BioTE Pellets?</h2>
            <p>
              Pellets are small, custom-compounded cylinders made of estradiol or testosterone. They are roughly the size of a grain of rice and are inserted under the skin (usually in the hip area) during a quick, simple office visit. Once inserted, the pellets release a steady, low dose of hormones over the course of 3 to 6 months, imitating your body&apos;s natural rhythm.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 NOT-prose">
              {[
                { title: 'Consistent Delivery', icon: Clock, desc: 'Avoid the "roller coaster" effect of pills or creams with steady release.' },
                { title: 'Custom Dosing', icon: User, desc: 'Doses are calculated based on your unique blood work and symptoms.' },
                { title: 'Natural Sourcing', icon: Heart, desc: 'Derived from plants and mimicking human hormones perfectly.' },
                { title: 'Convenience', icon: ShieldCheck, desc: 'Only 3-4 visits per year required for most patients.' },
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

            <h2 className="text-3xl font-light text-slate-900">Who Can Benefit?</h2>
            <p>
              Both men and women experience hormone decline as they age. Common symptoms of hormone imbalance include fatigue, brain fog, unexplained weight gain, mood swings, decreased libido, and poor sleep. BioTE pellets help restore balance, allowing you to regain your vitality and age gracefully.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl my-12 italic">
              &ldquo;Patients often report improved energy, better mood stabilization, and enhanced bone health within just a few weeks of their first insertion.&rdquo;
            </div>

            <h2 className="text-3xl font-light text-slate-900">What to Expect</h2>
            <p>
              The process begins with a comprehensive blood panel and a consultation with Mary Lynn Palmer. We will analyze your results and determine the exact dosage required. The insertion procedure takes less than 10 minutes and requires only local anesthesia. There is minimal downtime, and you can resume most normal activities immediately.
            </p>
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white">
            <h2 className="text-3xl font-light mb-6">Begin Your Hormone Balance Journey</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Schedule your initial consultation and blood work to see if BioTE pellet therapy is right for you.
            </p>
            <a
              href="tel:903-632-0078"
              className="inline-block bg-accent text-slate-900 px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Call 903-632-0078
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
