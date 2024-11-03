import './App.css';
import { Pages } from './components/pages/Pages';
import React from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Pages />
      <Analytics />
    </div>
  );
}

export default App;
