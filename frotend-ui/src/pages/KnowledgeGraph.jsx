import React from 'react';

const KnowledgeGraph = () => {
  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 border-b border-teal-400 pb-2">
        Knowledge Graph
      </h2>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-2xl">
        <p className="text-slate-300">
          This is where you will render the interactive knowledge graph visualization using a library like D3.js, react-flow, or another graphing library.
        </p>
        {/* TODO: Add your Knowledge Graph component here */}
      </div>
    </div>
  );
};

export default KnowledgeGraph;