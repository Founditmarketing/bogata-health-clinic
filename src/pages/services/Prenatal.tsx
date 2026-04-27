import { motion } from 'motion/react';
import { ArrowLeft, Baby, Heart, Stethoscope, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Prenatal() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Personalized <br />
            <span className="text-primary italic">Prenatal Care</span>
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1200"
              alt="Caring prenatal visit"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Pregnancy is a transformative time that requires attentive, compassionate medical oversight. At Bogata Health Clinic, we provide comprehensive prenatal care designed to keep both you and your baby healthy from conception to delivery.
            </p>

            <h2 className="text-3xl font-light text-slate-900">Comprehensive Support</h2>
            <p>
              Under the guidance of Mary Lynn Palmer, WHNP-BC, our prenatal services focus on early and regular medical care to monitor your health and your baby&apos;s development. We believe in building a relationship of trust so you feel empowered and informed throughout your entire pregnancy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 NOT-prose">
              {[
                { title: 'Regular Screenings', icon: Stethoscope, desc: 'Consistent monitoring of blood pressure, weight, and fetal growth.' },
                { title: 'Nutrition Advice', icon: Heart, desc: 'Personalized dietary guidance and vitamin recommendations.' },
                { title: 'Growth Tracking', icon: Baby, desc: 'Ensuring your baby is developing correctly at every trimester.' },
                { title: 'Birth Planning', icon: Calendar, desc: 'Discussing your options and preparing you for the delivery experience.' },
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

            <h2 className="text-3xl font-light text-slate-900">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>Initial pregnancy confirmation and consultation.</li>
              <li>Regular trimester check-ups and physical exams.</li>
              <li>Essential prenatal laboratory testing and imaging coordinates.</li>
              <li>Management of pregnancy-related conditions (e.g., gestational diabetes or hypertension).</li>
              <li>Postpartum care and breastfeeding support.</li>
            </ul>

            <h2 className="text-3xl font-light text-slate-900">Your Health, Your Baby</h2>
            <p>
              We understand that every pregnancy is unique. Whether this is your first child or your fourth, we tailor our medical approach to match your health history and your personal goals for your birth experience.
            </p>
          </div>

          <div className="mt-20 p-12 bg-primary rounded-[3rem] text-center text-white">
            <h2 className="text-3xl font-light mb-6">Expecting a Bundle of Joy?</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              Schedule your first prenatal appointment today to begin your journey with expert local care.
            </p>
            <a
              href="tel:903-632-0078"
              className="inline-block bg-white text-primary px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Call 903-632-0078
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
