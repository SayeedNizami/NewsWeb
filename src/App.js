import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = "b7e67051975b4bfe838b8bcfb55c737c"
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={6} country="in" category="general" />} />
          <Route exact path="business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path="general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path="science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path="sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

