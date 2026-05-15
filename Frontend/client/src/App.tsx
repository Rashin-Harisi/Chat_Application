//import { useEffect, useState } from "react";
import Home from './components/Home';


function App() {
  /*
  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not connect to backend"));
  }, []);
  */
  return (
    <main className="w-screen h-screen bg-gray-500 flex items-center justify-center">
      <div className="w-[80%] h-[80%] bg-white rounded-2xl shadow-xl">
        <Home/>
      </div>
    </main>
  );
}

export default App;