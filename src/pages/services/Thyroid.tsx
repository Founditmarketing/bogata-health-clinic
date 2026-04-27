import { motion } from 'motion/react';
import { ArrowLeft, Activity, Zap, Brain, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Thyroid() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Thyroid <br />
            <span className="text-primary italic">Management & Wellness</span>
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1584362917165-51b73ca0749d?auto=format&fit=crop&q=80&w=1200"
              alt="Wellness monitoring"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Your thyroid gland plays a vital role in regulating your metabolism, energy levels, and overall body function. When it isn&apos;t working correctly, it can affect every aspect of your life.
            </p>

            <h2 className="text-3xl font-light text-slate-900">Understanding Hypothyroidism</h2>
            <p>
              Hypothyroidism, or an underactive thyroid, is a common condition particularly among women. It occurs when your thyroid gland doesn&apos;t produce enough of certain key hormones. This can lead to a slowing down of bodily processes, resulting in a variety of symptoms that are often mistaken for aging or stress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 NOT-prose">
              {[
                { title: 'Metabolism', icon: Activity, desc: 'Impact on weight management and digestion.' },
                { title: 'Energy Levels', icon: Zap, desc: 'Persistent fatigue or feeling unusually cold.' },
                { title: 'Cognitive Health', icon: Brain, desc: '"Brain fog" and difficulty concentrating.' },
                { title: 'Regulation', icon: Thermometer, desc: 'Body temperature and heartbeat regulation.' },
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

            <h2 className="text-3xl font-light text-slate-900">Common Symptoms</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>Fatigue and lethargy.</li>
              <li>Increased sensitivity to cold.</li>
              <li>Weight gain and difficulty losing weight.</li>
              <li>Dry skin and brittle hair/nails.</li>
              <li>Muscle weakness and joint pain.</li>
              <li>Memory lapses or "cloudy" thinking.</li>
            </ul>

            <h2 className="text-3xl font-light text-slate-900">Our Treatment Approach</h2>
            <p>
              Effective thyroid management starts with correct testing. We look beyond basic TSH levels to provide a more complete picture of your thyroid function. By analyzing various thyroid markers, Mary Lynn Palmer can develop a nuanced treatment plan that may include hormone replacement therapy, nutritional adjustments, and lifestyle modifications to help you feel your best again.
            </p>
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white">
            <h2 className="text-3xl font-light mb-6 font-sans">Stop Feeling Fatigued</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              If you suspect your thyroid might be out of balance, schedule a blood panel today.
            </p>
            <a
              href="tel:903-632-0078"
              className="inline-block bg-accent text-slate-900 px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
