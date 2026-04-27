import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-white text-body pt-32 pb-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">
        {/* Branding */}
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="flex items-center group">
            <img
              src="/clinic-logo.jpg"
              alt="Bogata Health Clinic"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-muted font-light">
            Founded by Mary Lynn Palmer, RN, WHNP-BC. Dedicated to balance and proactive healthcare in Bogata, Texas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Philosophy</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Medical Care</Link></li>
            <li><Link to="/assessment" className="hover:text-primary transition-colors">Health Assessment</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Appointments</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Expertise</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link to="/services/biote" className="hover:text-primary transition-colors">BioTE® Therapy</Link></li>
            <li><Link to="/services/prenatal" className="hover:text-primary transition-colors">Prenatal Monitoring</Link></li>
            <li><Link to="/services/well-woman" className="hover:text-primary transition-colors">Well-Woman Exams</Link></li>
            <li><Link to="/services/thyroid" className="hover:text-primary transition-colors">Thyroid Balance</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Contact</h4>
          <ul className="space-y-6 text-sm font-light">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-primary shrink-0" />
              <span className="leading-relaxed">106 2nd St NW<br />Bogata, TX 75417</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:903-632-0078" className="hover:text-heading transition-colors font-medium">903-632-0078</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted uppercase tracking-[0.2em] font-medium">
        <p>© {new Date().getFullYear()} Bogata Health Clinic. Excellence in Wellness.</p>
        <div className="flex gap-8">
            <span>HIPAA Compliant</span>
            <span>Bogata, TX 75417</span>
          </div>
      </div>
    </footer>
  );
}
