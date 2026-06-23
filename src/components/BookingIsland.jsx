import React, { useState } from 'react';
import { ChevronLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const industries = [
  'Beauty Salon', 'Software/SaaS', 'Restaurant', 'Retail Store', 
  'Manufacturing', 'Service Business', 'Healthcare', 'Education', 'Other'
];

const mainChallenges = [
  { label: '📈 Revenue Growth', value: 'revenue' },
  { label: '💰 Cost Reduction', value: 'cost' },
  { label: '⚡ Productivity Improvement', value: 'productivity' },
  { label: '❓ Not Sure', value: 'notsure' }
];

const diagnosticQuestions = {
  revenue: [
    { id: 'q1', text: 'Do you generate leads consistently?', weight: 25 },
    { id: 'q2', text: 'Is your sales conversion above 30%?', weight: 25 },
    { id: 'q3', text: 'Do customers return repeatedly?', weight: 25 },
    { id: 'q4', text: 'Is your brand known locally?', weight: 25 }
  ],
  cost: [
    { id: 'q1', text: 'Do you track monthly profit?', weight: 25 },
    { id: 'q2', text: 'Is inventory monitored?', weight: 25 },
    { id: 'q3', text: 'Are expenses categorized?', weight: 25 },
    { id: 'q4', text: 'Do you know your break-even point?', weight: 25 }
  ],
  productivity: [
    { id: 'q1', text: 'Are tasks assigned clearly?', weight: 25 },
    { id: 'q2', text: 'Do employees follow SOPs?', weight: 25 },
    { id: 'q3', text: 'Is performance measured?', weight: 25 },
    { id: 'q4', text: 'Are meetings productive?', weight: 25 }
  ],
  notsure: [
    { id: 'q1', text: 'Do you generate leads consistently?', weight: 33 },
    { id: 'q2', text: 'Do you track monthly profit?', weight: 33 },
    { id: 'q3', text: 'Do employees follow SOPs?', weight: 34 }
  ]
};

const impactData = {
  revenue: [
    { field: 'Marketing', impact: '45%' },
    { field: 'Sales', impact: '40%' },
    { field: 'Brand Management', impact: '35%' },
    { field: 'Customer Experience', impact: '40%' },
    { field: 'Product Development', impact: '30%' },
    { field: 'Strategy', impact: '25%' }
  ],
  cost: [
    { field: 'Operations', impact: '55%' },
    { field: 'Finance', impact: '45%' },
    { field: 'Strategy', impact: '20%' },
    { field: 'HR', impact: '10%' }
  ],
  productivity: [
    { field: 'HR', impact: '50%' },
    { field: 'Product Development', impact: '40%' },
    { field: 'Strategy', impact: '35%' },
    { field: 'Customer Experience', impact: '30%' },
    { field: 'Operations', impact: '25%' }
  ],
  notsure: [
    { field: 'Operations', impact: '40%' },
    { field: 'Marketing', impact: '35%' },
    { field: 'Finance', impact: '25%' }
  ]
};

const recommendations = {
  revenue: {
    area: 'Marketing & Sales',
    text: 'Increase Google Visibility + Conversion System'
  },
  cost: {
    area: 'Operations & Finance',
    text: 'Implement Cost Dashboard'
  },
  productivity: {
    area: 'People & Systems',
    text: 'Implement SOP + KPI Framework'
  },
  notsure: {
    area: 'General Efficiency',
    text: 'Schedule Growth Assessment Call'
  }
};

const BookingIsland = () => {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');
  const [answers, setAnswers] = useState({}); // Stores boolean answers for the questions

  const handleReset = () => {
    setStep(1);
    setIndustry('');
    setChallenge('');
    setAnswers({});
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const toggleAnswer = (questionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Score calculation: start with base values, if Q is answered YES, score gets calculated.
  // We can simulate the user scores:
  // e.g. if Yes to all, score is 100. If some yes, some no, score changes.
  // Let's make it calculate a logical score:
  // base score is determined by the number of 'Yes' responses.
  const calculateResult = () => {
    const questions = diagnosticQuestions[challenge] || [];
    let yesCount = 0;
    questions.forEach((q) => {
      if (answers[q.id]) {
        yesCount += 1;
      }
    });

    // Let's create an organic mapping to the user's sample scores (78, 62, 54):
    // Revenue standard: 78
    // Cost standard: 62
    // Productivity standard: 54
    // We can offset these based on answers:
    let baseScore = 50;
    if (challenge === 'revenue') baseScore = 60;
    if (challenge === 'cost') baseScore = 45;
    if (challenge === 'productivity') baseScore = 40;

    const addedScore = yesCount * 10;
    const finalScore = Math.min(baseScore + addedScore, 100);

    return {
      score: finalScore,
      weakestArea: recommendations[challenge]?.area || 'Strategy',
      recommendation: recommendations[challenge]?.text || 'Consult Yobix Architect'
    };
  };

  const currentQuestions = diagnosticQuestions[challenge] || [];
  const currentImpacts = impactData[challenge] || [];
  const result = calculateResult();

  return (
    <div className='w-full max-w-4xl mx-auto px-4 py-8 bg-secondary/25 border border-white/5 rounded-3xl shadow-2xl backdrop-blur-md animate-fade-in'>
      {step <= 4 && (
        <div className='flex justify-between items-center mb-10 max-w-xs mx-auto'>
          {[1, 2, 3, 4].map((s) => (
            <React.Fragment key={s}>
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  step >= s ? 'bg-primary shadow-lg shadow-primary/20 scale-105' : 'bg-text-muted/30'
                }`}
              ></div>
              {s < 4 && (
                <div className={`flex-1 h-[2px] mx-2 ${step > s ? 'bg-primary/50' : 'bg-text-muted/15'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Step 1: Industry Selection */}
      {step === 1 && (
        <div className='space-y-6 text-center'>
          <h2 className='text-2xl sm:text-3xl font-display font-extrabold text-text-main'>
            Select Your Business Industry
          </h2>
          <p className='text-sm text-text-muted max-w-md mx-auto'>
            Choosing your field helps us tailor the diagnostic data weights to your specific operation type.
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4'>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => {
                  setIndustry(ind);
                  handleNext();
                }}
                className={`p-4 text-sm font-medium rounded-xl border transition-all duration-200 text-center cursor-pointer hover:scale-[1.02] ${
                  industry === ind 
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-background/40 border-white/5 hover:border-primary/20 hover:bg-secondary/60 text-text-muted hover:text-text-main shadow-md hover:shadow-lg'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Biggest Challenge */}
      {step === 2 && (
        <div className='space-y-6 text-center'>
          <h2 className='text-2xl sm:text-3xl font-display font-extrabold text-text-main'>
            Which area is your biggest challenge?
          </h2>
          <p className='text-sm text-text-muted max-w-md mx-auto'>
            Select the domain where you feel your business growth is experiencing the most drag.
          </p>
          <div className='flex flex-col space-y-3 max-w-md mx-auto pt-4'>
            {mainChallenges.map((ch) => (
              <button
                key={ch.value}
                onClick={() => {
                  setChallenge(ch.value);
                  handleNext();
                }}
                className={`p-5 text-base font-semibold rounded-2xl border transition-all duration-200 text-left flex items-center justify-between cursor-pointer hover:scale-[1.02] ${
                  challenge === ch.value
                    ? 'bg-primary border-primary text-white shadow-lg scale-105'
                    : 'bg-background/40 border-white/5 hover:border-primary/20 hover:bg-secondary/60 text-text-muted hover:text-text-main'
                }`}
              >
                <span>{ch.label}</span>
                <span className='text-xs opacity-50'>Select &rarr;</span>
              </button>
            ))}
          </div>
          <div className='pt-6'>
            <button
              onClick={handleBack}
              className='text-xs text-text-muted hover:text-text-main flex items-center mx-auto cursor-pointer'
            >
              <ChevronLeftIcon className='h-4 w-4 mr-1' /> Go Back
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Specific Diagnosis Questions */}
      {step === 3 && (
        <div className='space-y-6'>
          <div className='text-center'>
            <span className='text-xs text-primary font-bold tracking-widest uppercase font-mono'>
              {industry} • Diagnostic
            </span>
            <h2 className='text-2xl sm:text-3xl font-display font-extrabold text-text-main mt-1'>
              Analyze {challenge.toUpperCase()} Factors
            </h2>
            <p className='text-sm text-text-muted mt-1'>
              Answer these simple questions to map out your business vulnerability.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 pt-6'>
            {/* Impact Table (Left) */}
            <div className='lg:col-span-2 bg-background/50 border border-white/5 rounded-2xl p-5 space-y-4'>
              <h3 className='text-xs font-mono font-bold tracking-wider text-text-muted uppercase'>
                Impact Distribution Weight
              </h3>
              <div className='space-y-2.5 text-xs'>
                {currentImpacts.map((row) => (
                  <div key={row.field} className='flex justify-between items-center py-1.5 border-b border-white/5 last:border-b-0'>
                    <span className='font-semibold text-text-main'>{row.field}</span>
                    <span className='text-accent font-mono font-bold'>{row.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions (Right) */}
            <div className='lg:col-span-3 space-y-4'>
              {currentQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() => toggleAnswer(q.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between hover:scale-[1.01] ${
                    answers[q.id]
                      ? 'bg-primary/10 border-primary/45 text-text-main shadow-md'
                      : 'bg-background/20 border-white/5 hover:border-primary/20 hover:bg-secondary/40 text-text-muted'
                  }`}
                >
                  <span className='text-sm font-medium pr-4'>{q.text}</span>
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                    answers[q.id] ? 'bg-primary border-primary text-white' : 'border-white/20'
                  }`}>
                    {answers[q.id] && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}

              <div className='pt-6 flex justify-between items-center'>
                <button
                  onClick={handleBack}
                  className='text-xs text-text-muted hover:text-text-main flex items-center cursor-pointer'
                >
                  <ChevronLeftIcon className='h-4 w-4 mr-1' /> Go Back
                </button>
                <button
                  onClick={handleNext}
                  className='bg-primary text-white hover:bg-primary-light font-bold px-6 py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/30'
                >
                  Diagnose &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Diagnostic Result Output */}
      {step === 4 && (
        <div className='space-y-8 animate-fade-in'>
          <div className='text-center space-y-2'>
            <span className='text-xs text-accent font-bold tracking-widest uppercase font-mono'>
              Diagnosis Complete
            </span>
            <h2 className='text-3xl font-display font-extrabold text-text-main'>
              Your Business Health Scorecard
            </h2>
            <p className='text-sm text-text-muted'>
              Algorithmic report generated for {industry} based on {challenge} responses.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-4'>
            {/* Score circle */}
            <div className='bg-background/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg'>
              <span className='text-xs font-mono tracking-wider text-text-muted uppercase mb-2'>Health Score</span>
              <div className='relative w-28 h-28 flex items-center justify-center rounded-full bg-secondary/50 border-4 border-primary/20 shadow-xl'>
                <span className='text-3xl font-bold font-display text-primary'>{result.score}</span>
                <span className='text-xs text-text-muted absolute bottom-4'>/ 100</span>
              </div>
            </div>

            {/* Weakest area */}
            <div className='bg-background/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center text-left shadow-lg space-y-2'>
              <span className='text-xs font-mono tracking-wider text-text-muted uppercase'>Weakest Vector</span>
              <p className='text-2xl font-bold font-display text-rose-400'>{result.weakestArea}</p>
              <p className='text-xs text-text-muted leading-relaxed'>
                Data indicators point to operations or channels inside this sector holding back efficiency.
              </p>
            </div>

            {/* Recommendation */}
            <div className='bg-background/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center text-left shadow-lg space-y-2'>
              <span className='text-xs font-mono tracking-wider text-text-muted uppercase'>Recommended Action</span>
              <p className='text-xl font-bold font-display text-emerald-400'>{result.recommendation}</p>
              <p className='text-xs text-text-muted leading-relaxed'>
                Systemized automated checks will isolate performance leaks in real-time.
              </p>
            </div>
          </div>

          <div className='pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <button
              onClick={handleReset}
              className='text-xs text-text-muted hover:text-text-main flex items-center transition-colors cursor-pointer'
            >
              <ArrowPathIcon className='h-4 w-4 mr-1.5' /> Run Diagnostics Again
            </button>
            <a
              href='/contact'
              className='w-full sm:w-auto inline-flex justify-center items-center bg-primary text-white hover:bg-primary-light font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm cursor-pointer hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/30'
            >
              Consult Yobix Architects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingIsland;
