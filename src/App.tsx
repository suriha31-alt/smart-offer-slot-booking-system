import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login />
      )}

      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {isLoggedIn ? "Go to Login" : "Go to Dashboard"}
        </button>
      </div>

    </div>
  );
}

export default App;