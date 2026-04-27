import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const mainServices = [
  {
    path: '/services/biote',
    title: 'BioTE Hormone Therapy',
    desc: 'Customized bioidentical hormone replacement for both men and women using plant-based pellets.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  },
  {
    path: '/services/prenatal',
    title: 'Prenatal Care',
    desc: 'Expert medical monitoring and emotional support throughout every stage of your pregnancy.',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800',
  },
  {
    path: '/services/well-woman',
    title: 'Well-Woman Exams',
    desc: 'Comprehensive annual screenings including Pap smears, pelvic and breast exams for overall health.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  },
  {
    path: '/services/thyroid',
    title: 'Thyroid Management',
    desc: 'Specialized care for hypothyroidism and endocrine wellness to optimize metabolism and energy.',
    image: 'https://images.unsplash.com/photo-1584362917165-51b73ca0749d?auto=format&fit=crop&q=80&w=800',
  },
  {
    path: '/services/family-planning',
    title: 'Family Planning',
    desc: 'Education, birth control options, and health counseling to help you plan your future with confidence.',
    image: 'https://images.unsplash.com/photo-1631217818242-a7c36a44c77c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-light mb-8">Personalized Medical Services</h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-500 font-light leading-relaxed">
            Bogata Health Clinic provides a full spectrum of primary care and specialized services with a focus on women&apos;s wellness and hormonal balance.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 space-y-24">
        {mainServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {service.desc}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-sm font-medium italic">Expert Provider Consultations</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-sm font-medium italic">Personalized Wellness Plans</span>
                </div>
              </div>
              <Link
                to={service.path}
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-primary-light transition-all"
              >
                Learn More About This Service <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Wellness Hub Teaser */}
      <section className="mt-32 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Unsure where to start?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Take our quick Hormone Health Assessment to understand your body better and see if our therapies are right for you.
          </p>
          <Link
            to="/assessment"
            className="inline-block bg-accent text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
