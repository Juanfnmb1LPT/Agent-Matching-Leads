import React, { useState } from 'react';
import specialistsData from '../data/specialists.json';

interface WizardProps {
  onClose: () => void;
}

interface FormData {
  intent: string;
  situation: string;
  timeline: string;
  city: string;
  state: string;
  fullName: string;
  email: string;
  phone: string;
}

const TOTAL_STEPS = 5;

const intentOptions = [
  { value: 'buy', label: 'Buy', icon: 'account_balance', desc: 'Acquire your next home with confidence and expert guidance.' },
  { value: 'sell', label: 'Sell', icon: 'sell', desc: 'List your property and connect with qualified buyers through our network.' },
  { value: 'invest', label: 'Invest', icon: 'trending_up', desc: 'Identify high-yield opportunities and grow your real estate portfolio.' },
];

interface SituationOption {
  value: string;
  label: string;
}

const situationsByIntent: Record<string, SituationOption[]> = {
  buy: [
    { value: 'first_time', label: 'First-time buyer' },
    { value: 'va', label: 'Military / VA' },
    { value: 'relocating', label: 'Relocating' },
    { value: 'general', label: 'Not sure' },
  ],
  sell: [
    { value: 'probate', label: 'Selling inherited property' },
    { value: 'divorce', label: 'Divorce' },
    { value: 'investment', label: 'Investment property' },
    { value: 'relocating', label: 'Relocating' },
    { value: 'general', label: 'Not sure' },
  ],
  invest: [
    { value: 'investment', label: 'Investment property' },
    { value: 'relocating', label: 'Relocating to a new market' },
    { value: 'general', label: 'Not sure' },
  ],
};

const timelineOptions = [
  { value: 'asap', label: 'ASAP', icon: 'bolt' },
  { value: '1-3', label: '1\u20133 months', icon: 'date_range' },
  { value: '3-6', label: '3\u20136 months', icon: 'event' },
  { value: 'exploring', label: 'Just exploring', icon: 'explore' },
];

function matchSpecialist(data: FormData) {
  const { situation, intent } = data;
  const specialists = specialistsData.specialists;

  // Match by situation first
  const match = specialists.find((s) => s.type === situation);
  if (match) return match;

  // Fallback: match by intent
  if (intent === 'invest') {
    const investMatch = specialists.find((s) => s.type === 'investment');
    if (investMatch) return investMatch;
  }

  // Default fallback
  return specialists.find((s) => s.type === 'general') || specialists[0];
}

export const Wizard: React.FC<WizardProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    intent: '',
    situation: '',
    timeline: '',
    city: '',
    state: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const situationOptions = formData.intent ? situationsByIntent[formData.intent] : [];

  const canProceed = () => {
    switch (step) {
      case 1: return formData.intent !== '';
      case 2: return formData.situation !== '';
      case 3: return formData.timeline !== '';
      case 4: return formData.city.trim() !== '' && formData.state.trim() !== '';
      case 5: return formData.fullName.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '';
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS) {
      // Clear situation if intent changed and situation is no longer valid
      if (step === 1 && formData.situation) {
        const validValues = situationsByIntent[formData.intent]?.map((o) => o.value) || [];
        if (!validValues.includes(formData.situation)) {
          setFormData((prev) => ({ ...prev, situation: '' }));
        }
      }
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const specialist = submitted ? matchSpecialist(formData) : null;
  const progress = submitted ? 100 : (step / TOTAL_STEPS) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
        {/* Progress Bar */}
        <div className="sticky top-0 left-0 w-full h-1 bg-surface-container-low z-10">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8 md:p-12">
          {!submitted ? (
            <>
              {/* Step Header */}
              <div className="mb-10">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-outline mb-2 font-label">
                  Step {step} of {TOTAL_STEPS}
                </span>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface leading-tight">
                  {step === 1 && 'What are you looking to do?'}
                  {step === 2 && 'What best describes your situation?'}
                  {step === 3 && 'When are you planning to move forward?'}
                  {step === 4 && 'Where are you looking?'}
                  {step === 5 && 'How can we reach you?'}
                </h2>
                <p className="mt-3 text-on-surface-variant font-light max-w-lg leading-relaxed text-sm">
                  {step === 1 && 'Select your primary objective so we can match you with the right specialist.'}
                  {step === 2 && 'This helps us find an agent with the exact experience you need.'}
                  {step === 3 && 'Knowing your timeline helps us prioritize your match.'}
                  {step === 4 && 'Enter the city and state where you need an agent.'}
                  {step === 5 && 'Your matched specialist will reach out to you directly.'}
                </p>
              </div>

              {/* Step 1: Intent */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {intentOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update('intent', opt.value)}
                      className={`group relative flex flex-col items-start p-6 border-b-2 transition-all duration-300 text-left rounded-sm ${
                        formData.intent === opt.value
                          ? 'bg-primary/5 border-primary'
                          : 'bg-surface-container-low border-transparent hover:border-primary/40'
                      }`}
                    >
                      <div className="mb-6 p-3 bg-white shadow-sm inline-flex rounded-sm">
                        <span className="material-symbols-outlined text-primary text-2xl">{opt.icon}</span>
                      </div>
                      <h3 className="text-lg font-headline mb-1 text-on-surface">{opt.label}</h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{opt.desc}</p>
                      {formData.intent === opt.value && (
                        <span className="absolute top-4 right-4">
                          <span className="material-symbols-outlined text-primary filled">check_circle</span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Situation (context-aware) */}
              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {situationOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update('situation', opt.value)}
                      className={`flex items-center gap-3 p-4 text-left rounded-sm transition-all duration-200 ${
                        formData.situation === opt.value
                          ? 'bg-primary/5 border border-primary text-primary font-semibold'
                          : 'bg-surface-container-low border border-transparent hover:border-outline-variant text-on-surface'
                      }`}
                    >
                      {formData.situation === opt.value ? (
                        <span className="material-symbols-outlined text-primary filled text-xl">radio_button_checked</span>
                      ) : (
                        <span className="material-symbols-outlined text-outline text-xl">radio_button_unchecked</span>
                      )}
                      <span className="text-sm">{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Timeline */}
              {step === 3 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update('timeline', opt.value)}
                      className={`flex flex-col items-center gap-3 p-6 rounded-sm transition-all duration-200 text-center ${
                        formData.timeline === opt.value
                          ? 'bg-primary/5 border border-primary'
                          : 'bg-surface-container-low border border-transparent hover:border-outline-variant'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl ${formData.timeline === opt.value ? 'text-primary' : 'text-outline'}`}>
                        {opt.icon}
                      </span>
                      <span className={`text-sm font-medium ${formData.timeline === opt.value ? 'text-primary' : 'text-on-surface'}`}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div className="space-y-5 mb-12 max-w-md">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => update('city', e.target.value)}
                      placeholder="e.g. Austin"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => update('state', e.target.value)}
                      placeholder="e.g. Texas"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Contact Info */}
              {step === 5 && (
                <div className="space-y-5 mb-12 max-w-md">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/30">
                <button
                  onClick={back}
                  className={`text-[11px] uppercase tracking-widest font-bold transition-colors flex items-center gap-2 ${
                    step === 1 ? 'text-outline/40 cursor-default' : 'text-outline hover:text-on-surface'
                  }`}
                  disabled={step === 1}
                >
                  <span className="material-symbols-outlined text-lg">keyboard_backspace</span>
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={!canProceed()}
                  className={`px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-3 rounded-sm ${
                    canProceed()
                      ? 'bg-primary text-on-primary shadow-lg shadow-primary/10 hover:translate-y-[-1px]'
                      : 'bg-surface-container text-outline cursor-not-allowed'
                  }`}
                >
                  {step === TOTAL_STEPS ? 'Find My Specialist' : 'Next Step'}
                  <span className="material-symbols-outlined text-sm">
                    {step === TOTAL_STEPS ? 'search' : 'east'}
                  </span>
                </button>
              </div>
            </>
          ) : (
            /* Result Screen */
            specialist && (
              <div className="text-center py-4">
                <span className="material-symbols-outlined text-primary text-5xl filled mb-4 block">verified</span>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-2">
                  We Found Your Specialist
                </h2>
                <p className="text-on-surface-variant text-sm mb-10">
                  Based on your answers, we've matched you with the best fit.
                </p>

                <div className="bg-surface-container-low rounded-xl p-8 max-w-md mx-auto">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-5 shadow-lg border-4 border-white"
                  />
                  <h3 className="font-headline text-2xl text-on-surface mb-1">{specialist.name}</h3>
                  <p className="text-primary font-label text-sm font-bold uppercase tracking-wider mb-4">
                    {specialist.title}
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {specialist.description}
                  </p>
                  <div className="space-y-2 text-left bg-white rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                      <span className="text-sm text-on-surface">{specialist.experience}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
                      <span className="text-sm text-on-surface">{specialist.recentActivity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">mail</span>
                      <span className="text-sm text-on-surface">{specialist.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">phone</span>
                      <span className="text-sm text-on-surface">{specialist.phone}</span>
                    </div>
                  </div>
                </div>

                <p className="text-on-surface-variant text-sm mt-8">
                  <strong className="text-on-surface">{specialist.name}</strong> will contact you shortly
                  at <strong className="text-on-surface">{specialist.phone}</strong> and <strong className="text-on-surface">{specialist.email}</strong>.
                </p>

                <button
                  onClick={onClose}
                  className="mt-8 bg-primary text-on-primary px-10 py-3 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg shadow-primary/10 hover:translate-y-[-1px] transition-all"
                >
                  Done
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
