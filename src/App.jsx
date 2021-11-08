import { useEffect, useState } from "react";
import { RouterIndex } from "./Router/RouterIndex";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="App__container">
        <div className="preloder" >
          <div className="loader"> </div>
        </div>
      </div>
    );
  }
  
  return (
    <RouterIndex/>
  );
}

export default App;
