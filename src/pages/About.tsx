import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Our Founder</span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
              Mary Lynn Palmer <br />
              <span className="text-primary italic">RN, WHNP-BC</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Bogata Health Clinic was founded by Mary Lynn Palmer, a Board Certified Women&apos;s Health Nurse Practitioner whose dedication to holistic well-being shaped every aspect of this practice.
              </p>
              <p>
                Her vision for the clinic centered on a simple but powerful idea: shift the focus from treating sickness to cultivating lasting wellness — with care that listens, personalizes, and empowers.
              </p>
              <p>
                That founding spirit guides everything we do today.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/mary-lynn-palmer.jpg"
                alt="Mary Lynn Palmer, Founder of Bogata Health Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Our Clinic Mission</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: 'Wellness First',
                desc: 'Preventing disease and optimizing health through proactive lifestyle and clinical guidance.',
                icon: ShieldCheck,
              },
              {
                title: 'Board Certified',
                desc: 'Founded on the highest standard of women\'s health expertise — WHNP-BC certified care.',
                icon: Award,
              },
              {
                title: 'Local Impact',
                desc: 'Proudly serving Bogata and surrounding Texas communities with accessible, high-quality healthcare.',
                icon: Users,
              },
              {
                title: 'Compassionate',
                desc: 'Every patient treated like family — a safe, judgment-free space for healing and growth.',
                icon: Heart,
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm hover:scale-110 transition-transform">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-10 text-center">Our Philosophy</h2>
        <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed space-y-8 text-slate-600">
          <p>
            At Bogata Health Clinic, true health means more than the absence of symptoms — it means vibrant energy, hormonal balance, and emotional resilience. Our approach centers on <strong>functional wellness</strong>: finding root causes rather than masking them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center not-prose">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 italic font-serif text-primary text-xl text-center shadow-lg shadow-primary/5">
              &ldquo;Healthcare should be a partnership — built on trust, transparency, and a shared goal of long-term vitality.&rdquo;
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square">
              <img
                src="/DocImages/hands on yours comfort.png"
                alt="Compassionate care at Bogata Health Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p>
            Whether navigating hormone changes, preparing for a new child, or seeking more attentive annual care — our clinic provides a serene environment where technology meets humanity, and every patient is heard.
          </p>
        </div>
      </section>
    </div>
  );
}
