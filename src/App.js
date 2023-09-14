import { useEffect } from 'react';
import './App.css';

function App() {
  const drumPadarr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: "Heater-1"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name: "Heater-2"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name: "Heater-3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      name: "Heater-4"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      name: "Clap"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      name: "Open-HH"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name: "Kick-n'-Hat"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      name: "Kick"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Closed-HH"
    }
  ];

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const drumPad = drumPadarr.find(drumPad => drumPad.text === e.key.toUpperCase())
      if (drumPad) {
        playsound(drumPad)
      };
    })
  }, [])





  function playsound(drumPad) {
    const audio = document.getElementById(drumPad.text);
    audio.play();
    const display = document.getElementById("display");
    display.innerHTML = drumPad.name;
  }

  return (
    <div className="App">
      <div id="drum-machine">

          <h1>Drum Machine</h1>
        <div id="display">
          Press a key or click a button
        </div>
        <div className="drum-pads">
          {drumPadarr.map((drumPad, index) =>
            <div
              key={drumPad.src}
              onClick={() => { playsound(drumPad); }}
              className="drum-pad" id={drumPad.name}>
              {drumPad.text}
              <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
            </div>)}
        </div>

      </div>
    </div>
  );
}

export default App;
