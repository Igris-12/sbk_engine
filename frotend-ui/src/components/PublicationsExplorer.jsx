import React from "react";
// Make sure to add plant images to your src/assets folder
import plant1 from '../assets/plant-1.png';
import plant2 from '../assets/plant-2.png';

// Mock data for the table
const tableData = [
  { year: 195, author: 1, mission: 1, '3': 3.1, species: 10, nest: 13 },
  { year: 155, author: 1, mission: 11, '3': 1, species: 10, nest: 13 },
  { year: 1, author: 3, mission: 12, '3': 1, species: 2, nest: 10 },
  { year: 16, author: 3, mission: 12, '3': 1, species: 18, nest: 12 },
  { year: 5, author: 12, mission: 1, '3': 1, species: 7, nest: 13 },
  { year: 23, author: 5, mission: 1, '3': 1, species: 2, nest: 13 },
  { year: 8, author: 3, mission: 23, '3': 1, species: 7, nest: 11 },
];

const Tag = ({ text, active }) => (
  <button className={`px-3 py-1 text-xs rounded-md font-medium ${
    active ? 'bg-nasa-accent-cyan text-nasa-blue' : 'bg-nasa-dark-gray text-nasa-light-gray hover:bg-nasa-dark-gray/70'
  }`}>
    {text}
  </button>
);

const PublicationsExplorer = () => {
  return (
    <div className="flex-1 bg-nasa-sidebar-bg/50 border border-nasa-border rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-nasa-light-gray mb-4">Publications Explorer</h2>
      
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-nasa-dark-gray mb-4">
        {['Microgravity', 'Mars Analog', 'Genomics', 'Economics', 'Radiation'].map((tab) => (
          <button key={tab} className={`px-3 py-1.5 text-sm font-medium ${
            tab === 'Radiation' ? 'text-nasa-accent-cyan border-b-2 border-nasa-accent-cyan' : 'text-nasa-gray hover:text-nasa-light-gray'
          }`}>{tab}</button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Section: Keywords and Table */}
        <div className="col-span-4">
          <div className="flex gap-2 mb-4">
            <Tag text="Keywords" />
            <Tag text="Plant-Microbe" />
            <Tag text="Radiation" active/>
          </div>
          <div className="bg-nasa-dark-gray/50 rounded-lg p-2 border border-nasa-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-nasa-gray border-b border-nasa-dark-gray">
                  {Object.keys(tableData[0]).map(key => <th key={key} className="p-2 font-normal">{key}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-nasa-dark-gray/70 transition-colors">
                    {Object.values(row).map((val, j) => <td key={j} className="p-2">{val}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Middle Section: Image Cards */}
        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-nasa-dark-gray/50 p-4 rounded-lg border border-nasa-border flex-1">
            <img src={plant1} className="rounded-md w-full h-28 object-cover" alt="Lunar Plant 1" />
            <p className="text-xs text-nasa-gray mt-2">Lunar Plants</p>
            <p className="text-nasa-light-gray font-semibold">Regolith centre</p>
          </div>
          <div className="bg-nasa-dark-gray/50 p-4 rounded-lg border border-nasa-border flex-[2]">
            <h3 className="text-base font-bold text-nasa-light-gray mb-2">Arabidopsis Thaliana Growth in Lunar Regolith Simulant</h3>
            <p className="text-sm text-nasa-gray mb-4">
              Aiaesent bibess invessaet borrecutes estiaspect. Ehent bidine invessi. Bita
              doles dolless ...
            </p>
            <div className="flex items-center justify-between">
              <img src={plant2} className="w-10 h-10 rounded-full object-cover border border-nasa-border" alt="Lunar Plant 2"/>
              <button className="bg-nasa-accent-cyan text-nasa-blue font-bold py-2 px-5 rounded-lg text-sm hover:bg-nasa-accent-cyan/90 transition-colors">AI Summarizer</button>
            </div>
          </div>
        </div>
        
        {/* Right Section: AI Summary */}
        <div className="col-span-4 bg-nasa-dark-gray/50 p-6 rounded-lg border border-nasa-border">
          <h3 className="text-lg font-bold text-nasa-light-gray mb-2">AI Summary: Atoades...</h3>
          <div className="text-sm space-y-4">
            <div>
              <h4 className="font-semibold text-nasa-accent-cyan mb-1">Results</h4>
              <ul className="list-disc list-inside text-nasa-gray marker:text-nasa-accent-cyan">
                <li>Isum fianide est coenat egalis</li>
                <li>Board, esuae esuae est ubrae</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-nasa-accent-cyan mb-1">Conclusions</h4>
              <ul className="list-disc list-inside text-nasa-gray marker:text-nasa-accent-cyan">
                <li>Aiaesent bibess invessaet borrecutes.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-nasa-accent-cyan mb-1">Linked Missions</h4>
              <ul className="list-disc list-inside text-nasa-gray marker:text-nasa-accent-cyan">
                <li>Apollo 11 (Simulant)</li>
                <li>Artemis I (Payload)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsExplorer;