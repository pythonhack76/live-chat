
import './App.css';
import io from 'socket.io-client'
import { useState} from "react"

const socket = io.connect("http://localhost:3001");

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [points, setPoints] = useState(0);
  const [rank, setRank] = useState(0);

  const joinRomm = () => {

  }

  return (
    <div className="App">
      <h1>Inizia la Chat!</h1>
      <h3>Start with Chat</h3>
      <input type="text" placeholder="Pippo..." onChange={(event) => {setUsername(event.target.value);
      }}
      />
      <input type="text" placeholder="Stanza ID..." onChange={(event) => {setRoom(event.target.value); }} />
      <button>Join a stanza</button>
    </div>
  );
}

export default App;
