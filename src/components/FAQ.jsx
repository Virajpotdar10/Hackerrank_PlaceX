import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Who can participate in this event?",
    answer: "Any student with basic knowledge of programming and problem-solving can participate."
  },
  {
    question: "Is it compulsory to have a HackerRank account?",
    answer: "Yes, participants must have a HackerRank account before the event."
  },
  {
    question: "What is the format of the event?",
    answer: "The event consists of three rounds: Aptitude Test, Coding Round, and Debugging Round."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Basic knowledge is recommended, but beginners can also participate and learn."
  },
  {
    question: "Which programming languages are allowed?",
    answer: "Participants can use languages supported by the coding platform (e.g., C, C++, Python, Java)."
  },
  {
    question: "Where will the coding round be conducted?",
    answer: "The coding round will be conducted on the HackerRank platform."
  },
  {
    question: "Can I use mobile phones during the event?",
    answer: "No, use of mobile phones or unfair means is strictly prohibited."
  },
  {
    question: "What should I bring on the event day?",
    answer: "Carry your college ID card and basic essentials. You may bring your own laptop (with charger), or you can use the PCs provided at the venue"
  },
  {
    question: "How will results be announced?",
    answer: "Results will be declared after evaluation, and winners will be announced officially."
  },

];


const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${isOpen
          ? 'bg-white/5 border-red-500/30'
          : 'bg-white/[0.02] border-white/5 hover:border-white/10'
          } glass card-shine text-left group`}
      >
        <div className="flex gap-4 items-center">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-red-500/20' : 'bg-white/5'}`}>
            <HelpCircle className={`w-5 h-5 ${isOpen ? 'text-red-500' : 'text-gray-400'}`} />
          </div>
          <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
            {question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : 'text-gray-500'
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-gray-400 leading-relaxed">
              <div className="h-px w-full bg-gradient-to-r from-red-500/20 to-transparent mb-4" />
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              FAQ
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-red-500 mx-auto rounded-full blur-[2px] opacity-50" />
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
