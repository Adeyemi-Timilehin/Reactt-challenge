import {useState} from 'react';
export default function App() {
  const [title, setTitle]=useState(false);
  return (
    <div className="App">
   { title&&<h1>Welcome to React Challenges</h1>}
    <button onClick={()=>setTitle(!title)} style={{backgroundColor:'purple',borderRadius:'20px',}}>{title?'Hide':'Show'}</button>
    </div>
  );
}
