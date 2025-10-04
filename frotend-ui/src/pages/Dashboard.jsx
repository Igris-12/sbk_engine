// Dashboard.jsx (Updated to fetch Summary and Assistant data from the API)

import React, { useState, useEffect, useCallback } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import axios from 'axios'; // 🌟 Import Axios for API communication

// Configuration for the Node.js Proxy Server
const NODE_SERVER_URL = 'http://localhost:3000'; // Ensure your Node.js server runs here

const Dashboard = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  const readableTopic = topic ? topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'NASA Bioscience Overview';
  
  // State for the initial AI summary/conclusion
  const [summary, setSummary] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);
  
  // State for the AI Assistant chat
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Generic function to send a query through Node.js proxy to Flask/Gemini.
   */
  const fetchGeminiResponse = useCallback(async (userQuery) => {
    setError(null); // Clear previous errors
    try {
      const response = await axios.post(`${NODE_SERVER_URL}/ask-gemini`, {
        query: userQuery,
      });
      // The response structure from Flask/Node is { "response": "..." }
      return response.data.response; 
    } catch (err) {
      console.error('API Error:', err);
      const errorMessage = err.response?.data?.error || err.message || 'An unknown API error occurred.';
      setError(errorMessage);
      // Propagate the error so the calling function can handle loading state
      throw new Error(errorMessage);
    }
  }, []);

  // --- 1. Initial Topic Summary/Conclusion Fetch (Runs once on component load) ---
  useEffect(() => {
    // Prompt to get the combined summary and conclusion from Gemini
    const initialPrompt = `Provide a detailed summary and conclusion for the topic: "${readableTopic}". Structure the response clearly with headings for 'Summary' and 'Conclusion'.`;
    
    setIsSummaryLoading(true);

    fetchGeminiResponse(initialPrompt)
      .then(geminiResponseText => {
        setSummary(geminiResponseText);
      })
      .catch(err => {
        setSummary("⚠️ Could not load topic summary. Please check if Node.js (Port 3000) and Flask (Port 5000) servers are running.");
      })
      .finally(() => {
        setIsSummaryLoading(false);
      });
  }, [topic, fetchGeminiResponse, readableTopic]); 

  // --- 2. AI Assistant Query Handler (Replaces the setTimeout mock) ---
  const handleAskQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsAssistantLoading(true);
    setAnswer(null);

    try {
      // Send the specific question within the context of the current topic
      const fullQuery = `Regarding the topic: "${readableTopic}", answer the following question: "${question}"`;
      const geminiResponseText = await fetchGeminiResponse(fullQuery);
      setAnswer(geminiResponseText);
      setQuestion(''); // Clear input on success
    } catch (err) {
      // Error message is already set by fetchGeminiResponse
      setAnswer(`Error: Failed to get a response. Details: ${error}`);
    } finally {
      setIsAssistantLoading(false);
    }
  };

  return (
    <div className="p-6 h-full flex flex-col bg-slate-950 text-slate-100">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 border-b border-teal-400 pb-2">
        Dashboard: {readableTopic}
      </h2>

      {/* Display general API error message if one occurred */}
      {error && (
        <div className="p-3 mb-4 bg-red-900 border border-red-500 rounded-lg text-red-300">
          **API Error:** {error}
        </div>
      )}

      {/* --- AI Research Assistant Section (Original Functionality, now live API) --- */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-2xl mb-8">
        <h3 className="text-xl font-bold text-teal-400 mb-4">AI Research Assistant 🤖</h3>
        
        <form onSubmit={handleAskQuestion} className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder={`Ask about ${readableTopic}...`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-teal-400 outline-none"
            disabled={isAssistantLoading}
          />
          <button
            type="submit"
            disabled={isAssistantLoading || !question.trim()}
            className="bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-300 transition-colors"
          >
            {isAssistantLoading ? 'Thinking...' : <FiSend size={20} />}
          </button>
        </form>
        
        {answer && (
          // Use whitespace-pre-wrap to respect newlines/formatting from Gemini's response
          <div className="p-4 bg-slate-900 rounded-lg border border-teal-400/50 whitespace-pre-wrap">
            **Answer:** {answer}
          </div>
        )}
      </div>

      {/* --- Initial Summary/Conclusion Section (Now Fetched from API) --- */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-2xl mb-8">
        <h3 className="text-xl font-bold text-green-400 mb-4">AI Topic Summary & Conclusion 📝</h3>
        {isSummaryLoading ? (
          <div className="text-center py-4 text-slate-400">Loading comprehensive summary from Gemini...</div>
        ) : (
          // Use whitespace-pre-wrap to display formatting (headings, newlines) from the AI
          <div className="p-4 bg-slate-900 rounded-lg border border-green-400/50 whitespace-pre-wrap">
            {summary}
          </div>
        )}
      </div>
      {/* END OF API-FETCHED SUMMARY SECTION */}

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