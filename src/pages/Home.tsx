import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Shield, Sparkles, Droplets } from 'lucide-react';

const services = [
  {
    title: 'Hormone Replacement',
    desc: 'Bioidentical hormone therapy using BioTE pellets to restore balance and vitality.',
    icon: Sparkles,
    path: '/services/biote',
  },
  {
    title: 'Prenatal Care',
    desc: 'Compassionate support and medical guidance throughout your pregnancy journey.',
    icon: Heart,
    path: '/services/prenatal',
  },
  {
    title: 'Well-Woman Exams',
    desc: 'Annual Pap smears, pelvic and breast exams, and preventive screenings.',
    icon: Shield,
    path: '/services/well-woman',
  },
  {
    title: 'Thyroid Management',
    desc: 'Expert care for hypothyroidism and thyroid-related wellness optimization.',
    icon: Activity,
    path: '/services/thyroid',
  },
];

export default function Home() {
  return (
    <div className="w-full bg-neutral">
      {/* Main Hero Section */}
      <section className="pt-32 min-h-screen px-6 md:px-12 flex flex-col">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent font-semibold text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-[1px] bg-accent"></span>
                Providing Care in Bogata, TX
              </div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.1] text-heading">
                Compassionate <br/>
                <span className="italic font-serif text-primary">care</span> for every <br/>
                stage of life.
              </h1>
              <p className="text-lg text-muted max-w-md leading-relaxed font-light">
                Led by Mary Lynn Palmer, WHNP-BC, we focus on wellness instead of sickness through personalized hormone balancing and primary care.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                 href="tel:903-632-0078"
                 className="px-8 py-4 bg-secondary text-primary-dark rounded-full font-medium hover:bg-slate-200 transition-all shadow-sm active:scale-95"
              >
                Schedule Appointment
              </a>
              <Link 
                to="/about"
                className="px-8 py-4 border border-primary/20 text-primary rounded-full font-medium hover:bg-white transition-all shadow-sm active:scale-95"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>

          {/* Image Section with Pill Masking */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] aspect-[1/1.2] bg-secondary rounded-[250px] relative overflow-hidden flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
               <div className="text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 bg-white/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                    <Heart className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-heading text-xl md:text-2xl font-light leading-relaxed italic font-serif">
                    &ldquo;A healthcare environment built on trust, warmth, and the scientific balance of hormones.&rdquo;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">— Mary Lynn Palmer</p>
               </div>
               {/* Background image subtley overlaying or hinted */}
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                 alt="Clinic Interior"
                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
               />
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 lg:bottom-10 left-0 lg:-left-12 bg-white p-8 rounded-3xl shadow-2xl shadow-primary/10 max-w-[280px] border border-border"
            >
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Featured Service</p>
              <h3 className="text-xl font-semibold text-heading mb-2 italic font-serif leading-tight">BioTE® Pellets</h3>
              <p className="text-sm text-muted leading-relaxed font-light">Natural, plant-based hormone therapy for men & women.</p>
              <Link to="/services/biote" className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Footer Service Pillars */}
        <div className="bg-white px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-border -mx-6 md:-mx-12 mt-auto">
          <div className="border-r border-border pr-8 last:border-0 md:last:border-r-0">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Prenatal Care</h4>
            <p className="text-xs text-muted leading-relaxed">Comprehensive monitoring and support during your pregnancy journey.</p>
          </div>
          <div className="border-r border-border md:px-8 last:border-0">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Well-Woman</h4>
            <p className="text-xs text-muted leading-relaxed">Annual exams, Pap smears, breast health, and preventative wellness.</p>
          </div>
          <div className="border-r border-border md:px-8 last:border-0">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Thyroid Health</h4>
            <p className="text-xs text-muted leading-relaxed">Specialized management for hypothyroidism and metabolic balance.</p>
          </div>
          <div className="md:pl-8">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">Clinic Location</h4>
            <p className="text-xs text-muted leading-relaxed">106 2nd St NW, Bogata, TX 75417</p>
            <p className="text-xs font-bold text-primary mt-1">903-632-0078</p>
          </div>
        </div>
      </section>

      {/* Main Services / Gallery Teaser Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light text-heading">Dedicated to Your Vitality</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white border border-border rounded-[2.5rem] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-heading italic font-serif">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-8 font-light">
                {service.desc}
              </p>
              <Link
                to={service.path}
                className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <Sparkles className="mx-auto text-accent w-10 h-10" />
          <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight">
            &ldquo;Focusing on wellness instead of sickness through compassionate, personalized, and qualified medical care.&rdquo;
          </h2>
          <div className="flex flex-col items-center gap-4">
             <div className="w-16 h-16 rounded-full border-2 border-accent p-1">
                <img 
                  src="/mary-lynn-palmer.jpg" 
                  className="w-full h-full object-cover rounded-full"
                  alt="Mary Lynn Palmer"
                />
             </div>
             <div>
                <p className="font-bold tracking-widest text-xs uppercase">Mary Lynn Palmer</p>
                <p className="text-[10px] text-white/60 tracking-widest uppercase">RN, WHNP-BC & Owner</p>
             </div>
          </div>
        </div>
      </section>

      {/* Assessment Hub Teaser */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="bg-heading rounded-[4rem] p-12 md:p-24 overflow-hidden relative flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 mix-blend-overlay"></div>
            <div className="relative z-10 space-y-8 md:w-3/5">
               <span className="text-accent font-bold text-xs uppercase tracking-widest">Self-Discovery</span>
               <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                  Discover Your Path <br/>
                  <span className="italic font-serif text-accent">to Balance.</span>
               </h2>
               <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
                  Take our private hormone health assessment to understand your symptoms and take the first step toward feeling orignal again.
               </p>
               <Link 
                 to="/assessment" 
                 className="inline-block bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl active:scale-95"
               >
                  Begin Assessment Hub
               </Link>
            </div>
            <div className="md:w-2/5 flex justify-center">
               <div className="w-64 h-64 border-4 border-accent/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-48 h-48 border-2 border-accent/40 rounded-full flex items-center justify-center">
                     <Activity size={64} className="text-accent" />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
