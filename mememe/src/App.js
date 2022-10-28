import React, { Component } from "react";
import "./App.css";


let j = -1;

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        let imgArr = [];
        for (let i in res.data.memes) {
          imgArr.push(res.data.memes[i].url);
        }
      });
  }

  render() {
    const nextClick = () => {
      j++
      if (j > 99) {
        j = 0
      }
      document.getElementById("counter").innerHTML = `${j + 1}/100`
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => {
          let imgArr = [];
          for (let i in res.data.memes) {
            imgArr.push(res.data.memes[i].url);
          }
          document.querySelector("#meme").src = imgArr[j];
        })
    };

    const backClick = () => {
      j--
      if (j < 0) {
        j = 99
      }
      document.getElementById("counter").innerHTML = `${j + 1}/100`
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => {
          let imgArr = [];
          for (let i in res.data.memes) {
            imgArr.push(res.data.memes[i].url);
          }
          document.querySelector("#meme").src = imgArr[j];
        })
    };

    const randomClick = () => {
      j = Math.floor(Math.random() * 99)
      document.getElementById("counter").innerHTML = `${j + 1}/100`
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => {
          let imgArr = [];
          for (let i in res.data.memes) {
            imgArr.push(res.data.memes[i].url);
          }
          document.querySelector("#meme").src = imgArr[j];
        })
    };
    return (
      <div className="App">
        <h1>Meme Templates!</h1>
        <h2 onClick={nextClick} id="nextButton">Next</h2>
        <h2 onClick={randomClick} id="randomButton">Surprise Me!</h2>
        <h2 onClick={backClick} id="backButton">Back</h2>
        <h3 id="counter"></h3>
        <div id="memeCont"><img id="meme" src="" /></div>
      </div>
    );
  }
}

export default App;