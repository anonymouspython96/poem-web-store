import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div class="container">
        <section class="sidebar">
          <h1 class="vertical-heading">
            <span>P</span>
            <span>O</span>
            <span>E</span>
            <span>S</span>
            <span>I</span>
            <span>E</span>
            <br />
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <br />
            <span>T</span>
            <span>U</span>
            <span>T</span>
            <span>T</span>
            <span>I</span>
          </h1>
        </section>
        <section class="content">
          <header>
            <h2>Profilo</h2>
            <button>Carrello</button>
          </header>
          <main>Main Content (70% height, scrollable)</main>
          <footer>Footer (15% height)</footer>
        </section>
      </div>
    </>
  );
}

export default App;
