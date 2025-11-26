import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Frontend React</h1>
      <p>Message from Backend: {msg}</p>
    </>
  );
}

export default App;
