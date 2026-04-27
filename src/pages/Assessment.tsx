import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, RefreshCcw, ClipboardList } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "How would you describe your general energy levels lately?",
    options: [
      { label: "Consistently high and stable", points: 'fine' },
      { label: "Frequent 'afternoon slumps'", points: 'hormone' },
      { label: "Waking up tired regardless of sleep", points: 'thyroid' },
      { label: "Completely exhausted most of the time", points: 'both' },
    ]
  },
  {
    id: 2,
    question: "Have you noticed changes in your mood or mental clarity?",
    options: [
      { label: "Feeling sharp and emotionally balanced", points: 'fine' },
      { label: "Occasional 'brain fog' or forgetfulness", points: 'hormone' },
      { label: "Increasing anxiety or low mood", points: 'both' },
      { label: "Significant irritability or mood swings", points: 'hormone' },
    ]
  },
  {
    id: 3,
    question: "How has your sleep quality been recently?",
    options: [
      { label: "Falling asleep and staying asleep easily", points: 'fine' },
      { label: "Difficulty falling asleep", points: 'hormone' },
      { label: "Waking up frequently during the night", points: 'hormone' },
      { label: "Restless sleep and night sweats", points: 'biote' },
    ]
  },
  {
    id: 4,
    question: "Have you experienced unexplained changes in weight or metabolism?",
    options: [
      { label: "Weight is stable and easy to manage", points: 'fine' },
      { label: "Difficult to lose weight despite exercise", points: 'thyroid' },
      { label: "Recent unexplained weight gain", points: 'thyroid' },
      { label: "Changes in appetite or digestion", points: 'both' },
    ]
  }
];

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (points: string) => {
    setResults([...results, points]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getAnalysis = () => {
    const counts: Record<string, number> = {};
    results.forEach(r => counts[r] = (counts[r] || 0) + 1);
    
    if (counts['both'] > 1 || (counts['hormone'] > 1 && counts['thyroid'] > 1)) {
      return {
        title: "Comprehensive Wellness Opportunity",
        desc: "Based on your symptoms, you may be experiencing a combination of hormonal and thyroid imbalances. These systems often work together, and a change in one can affect the other.",
        recommendation: "A full metabolic and hormone blood panel is highly recommended to pinpoint precise imbalances.",
        next: "Hormone & Thyroid Consultation"
      };
    } else if (counts['hormone'] > 1 || counts['biote'] > 0) {
      return {
        title: "Potential Hormonal Imbalance",
        desc: "Your responses suggest symptoms commonly associated with declining hormone levels (estradiol or testosterone). These can affect sleep, mood, and cognitive function.",
        recommendation: "Bioidentical Hormone Therapy (BioTE) might be a life-changing option for you to restore balance.",
        next: "BioTE Evaluation"
      };
    } else if (counts['thyroid'] > 1) {
      return {
        title: "Thyroid Wellness Focus",
        desc: "Symptoms like persistent fatigue and metabolic changes often point toward thyroid irregularities, such as hypothyroidism.",
        recommendation: "A dedicated thyroid function test can help determine if your energy issues are related to thyroid hormone production.",
        next: "Thyroid Management Review"
      };
    } else {
      return {
        title: "Foundational Wellness",
        desc: "Your current levels seem relatively stable, but there is always room for optimization to ensure you maintain this vitality as you age.",
        recommendation: "Consider a preventative well-woman exam to establish a healthy baseline for the coming year.",
        next: "Annual Preventive Exam"
      };
    }
  };

  const reset = () => {
    setStep(0);
    setResults([]);
    setIsFinished(false);
  };

  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 w-full">
        {!isFinished ? (
          <div>
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <ClipboardList size={14} /> Self-Assessment
              </span>
              <h1 className="text-4xl font-light mb-4 text-slate-900">Wellness Insights Hub</h1>
              <p className="text-slate-500 font-light max-w-xl mx-auto">
                Answer a few basic questions about your daily health to receive personalized wellness tips. This is non-diagnostic and for educational purposes.
              </p>
              
              <div className="mt-10 flex justify-center gap-2">
                {questions.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === step ? 'w-12 bg-primary' : i < step ? 'w-4 bg-primary/40' : 'w-4 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-100/50"
              >
                <h2 className="text-2xl md:text-3xl font-light mb-10 text-slate-800 leading-tight">
                  {questions[step].question}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {questions[step].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(option.points)}
                      className="group flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all text-left"
                    >
                      <span className="text-lg text-slate-700 font-light group-hover:text-primary transition-colors">
                        {option.label}
                      </span>
                      <ArrowRight size={20} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-2xl text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-2">Assessment Complete</h2>
            <h1 className="text-3xl md:text-4xl font-light mb-8 text-slate-900">{getAnalysis().title}</h1>
            
            <div className="max-w-2xl mx-auto space-y-6 text-slate-600 font-light leading-relaxed mb-12">
              <p className="text-lg">
                {getAnalysis().desc}
              </p>
              <div className="p-6 bg-neutral rounded-2xl border border-slate-100">
                <p className="text-slate-800 font-medium mb-1 italic text-base">Key Recommendation:</p>
                <p className="text-base">{getAnalysis().recommendation}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:903-632-0078"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-3"
              >
                Book {getAnalysis().next}
              </a>
              <button
                onClick={reset}
                className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-medium text-sm"
              >
                <RefreshCcw size={16} /> Retake Assessment
              </button>
            </div>
            
            <p className="mt-12 text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              * This tool is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
