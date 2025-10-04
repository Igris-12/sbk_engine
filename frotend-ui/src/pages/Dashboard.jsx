import React, { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

const Dashboard = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  const readableTopic = topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    setAnswer(null);

    setTimeout(() => {
      const mockAnswer = `For "${readableTopic}" and the question "${question}", research shows promising findings.`;
      setAnswer(mockAnswer);
      setIsLoading(false);
      setQuestion('');
    }, 1200);
  };

  return (
    <div className="p-6 h-full flex flex-col bg-slate-950 text-slate-100">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 border-b border-teal-400 pb-2">
        Dashboard: {readableTopic}
      </h2>

      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-2xl mb-8">
        <h3 className="text-xl font-bold text-teal-400 mb-4">AI Research Assistant 🤖</h3>
        <form onSubmit={handleAskQuestion} className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder={`Ask about ${readableTopic}...`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-teal-400 outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-300 transition-colors"
          >
            {isLoading ? 'Thinking...' : <FiSend size={20} />}
          </button>
        </form>
        {answer && (
          <div className="p-4 bg-slate-900 rounded-lg border border-teal-400/50">{answer}</div>
        )}
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-slate-700 text-slate-100 font-bold py-3 px-6 rounded-full hover:bg-slate-600 transition-colors self-start"
      >
        ← Back to Overview
      </button>
    </div>
  );
};

export default Dashboard;
