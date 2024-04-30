import React, { useState } from 'react';
import './TextAnalysis.css'

const TextAnalysisComponent = () => {
  const [text, setText] = useState('');

  const handleAnalyse = () => {
    console.log('Analyzing text:', text);
  };

  return (
    <div className="container">
      <textarea
        className="textarea"
        placeholder="Enter the tweet..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button" onClick={handleAnalyse}>Analyse</button>
    </div>
  );
};

export default TextAnalysisComponent;
