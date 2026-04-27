import { motion } from 'motion/react';

const images = [
  { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09', title: 'Our Welcome Area' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', title: 'Consultation Suite' },
  { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', title: 'Hormone Wellness' },
  { url: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed', title: 'Prenatal Care' },
  { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118', title: 'Clinical Precision' },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'East Texas Roots' },
];

const testimonials = [
  {
    text: "Mary Lynn truly listens. For the first time in years, I feel like my symptoms were taken seriously and treated individually.",
    author: "Patient Story - Wellness Focus"
  },
  {
    text: "The BioTE pellets changed my life. My energy is back, I'm sleeping again, and I finally feel like myself.",
    author: "Patient Story - Hormone Balance"
  },
  {
    text: "Professional, clean, and so compassionate. Having this level of care in Bogata is a blessing.",
    author: "Patient Story - Prenatal Support"
  }
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">Gallery & Stories</span>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Wellness Captured</h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-light leading-relaxed">
            A glimpse into the serene environment and patient-focused approach of Bogata Health Clinic.
          </p>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] md:aspect-square"
            >
              <img
                src={`${img.url}?auto=format&fit=crop&q=80&w=800`}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex items-end">
                <p className="text-white font-medium text-lg italic">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Patient Perspectives</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-sm italic text-slate-600 font-light relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-4xl font-serif">
                  &ldquo;
                </div>
                <p className="mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-light not-italic">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
