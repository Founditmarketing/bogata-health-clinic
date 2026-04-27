import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-4 block">Meet Our Founder</span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
              Mary Lynn Palmer <br />
              <span className="text-primary italic">RN, WHNP-BC</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Mary Lynn Palmer is a Board Certified Women&apos;s Health Nurse Practitioner and the dedicated owner of Bogata Health Clinic. With years of experience and a passion for holistic well-being, she has built a practice centered on direct, compassionate care for the Bogata community.
              </p>
              <p>
                Her journey in medicine is defined by a singular vision: to shift the healthcare paradigm from &quot;treating sickness&quot; to &quot;cultivating wellness.&quot; By listening to her patients and understanding their unique physiological needs, Mary Lynn provides a higher standard of personalized medical support.
              </p>
              <p>
                Specializing in hormone optimization and prenatal care, she brings advanced medical expertise to a local setting, ensuring that high-quality, high-tech care is accessible to all.
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
                alt="Mary Lynn Palmer"
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
                desc: 'We focus on preventing disease and optimizing health through proactive lifestyle and clinical guidance.',
                icon: ShieldCheck,
              },
              {
                title: 'Board Certified',
                desc: 'Mary Lynn is a certified WHNP-BC, ensuring the highest standard of women&apos;s health expertise.',
                icon: Award,
              },
              {
                title: 'Local Impact',
                desc: 'Proudly serving Bogata and the surrounding Texas areas with accessible, high-quality healthcare.',
                icon: Users,
              },
              {
                title: 'Compassionate',
                desc: 'We treat every patient like family, providing a safe, judgment-free space for healing and growth.',
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

      {/* Philosophy Details */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-10 text-center">Our Philosophy</h2>
        <div className="prose prose-slate prose-lg max-w-none font-light leading-relaxed space-y-8 text-slate-600">
          <p>
            At Bogata Health Clinic, we believe that true health is more than just the absence of symptoms. It is a state of vibrant energy, hormonal balance, and emotional resilience. Our approach is deeply rooted in the philosophy of <strong>functional wellness</strong>—identifying the root causes of imbalances rather than just masking them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center not-prose">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 italic font-serif text-primary text-xl text-center shadow-lg shadow-primary/5">
              &ldquo;Healthcare should be a partnership between the provider and the patient, characterized by trust, transparency, and a shared goal of long-term vitality.&rdquo;
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
            Whether you are navigating the complexities of hormone changes, preparing for the joy of a new child, or seeking a more attentive approach to your annual exams, we are here to walk beside you. Our clinic provides a serene environment where technology meets humanity, and where every patient is heard.
          </p>
        </div>
      </section>
    </div>
  );
}
