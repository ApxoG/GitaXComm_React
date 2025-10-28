import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch(`/api/user/${userID}`)
  //     .then((res) => res.json())
  //     .then((user) => setUser(user));
  // }, [userID]);

  // UseEffect syntax
  // useEffect (() => {
  //   // Effect logic

  //   return () => {
  //     // Clean up logic (optional)
  //   }
  // })

  // const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((s) => s + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
