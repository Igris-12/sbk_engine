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
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-text-light mb-4 border-b border-accent-teal pb-2">
        Dashboard: {readableTopic}
      </h2>

      <div className="bg-space-light/50 p-6 rounded-xl border border-accent-blue-dark/50 shadow-2xl mb-8">
        <h3 className="text-xl font-bold text-accent-blue-light mb-4">AI Research Assistant 🤖</h3>
        <form onSubmit={handleAskQuestion} className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder={`Ask about ${readableTopic}...`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 bg-space-dark border border-space-border rounded-lg py-3 px-4 text-text-light placeholder-text-muted focus:ring-2 focus:ring-accent-teal outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="bg-accent-teal text-space-dark font-bold py-3 px-6 rounded-lg hover:bg-accent-teal/80 transition-colors"
          >
            {isLoading ? 'Thinking...' : <FiSend size={20} />}
          </button>
        </form>
        {answer && <div className="p-4 bg-space-dark rounded-lg border border-accent-teal/50">{answer}</div>}
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-accent-blue-dark text-text-light font-bold py-3 px-6 rounded-full hover:bg-accent-blue-dark/80 transition-colors self-start"
      >
        ← Back to Overview
      </button>
    </div>
  );
};

export default Dashboard;
