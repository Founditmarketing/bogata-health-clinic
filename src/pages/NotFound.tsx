import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral px-6 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full text-center space-y-10"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/clinic-logo.jpg"
            alt="Bogata Health Clinic"
            className="h-16 w-auto object-contain opacity-80"
          />
        </div>

        {/* 404 */}
        <div>
          <p className="text-[120px] md:text-[160px] font-light leading-none text-primary/10 select-none">
            404
          </p>
          <div className="-mt-8 space-y-4">
            <h1 className="text-3xl md:text-4xl font-light text-slate-900">
              Page Not <span className="italic font-serif text-primary">Found</span>
            </h1>
            <p className="text-slate-500 font-light leading-relaxed max-w-md mx-auto">
              The page you're looking for doesn't exist or may have moved. Let us help you find what you need.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <a
            href="tel:903-632-0078"
            className="inline-flex items-center justify-center gap-2 border border-primary/20 text-primary px-8 py-4 rounded-full font-medium hover:bg-white transition-all shadow-sm active:scale-95"
          >
            <Phone size={18} />
            Call Us Directly
          </a>
        </div>

        {/* Helpful links */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-primary">
            {[
              { label: 'Services', path: '/services' },
              { label: 'About', path: '/about' },
              { label: 'Wellness Quiz', path: '/assessment' },
              { label: 'Contact', path: '/contact' },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="hover:underline transition-all font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
