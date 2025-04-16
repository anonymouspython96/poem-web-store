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
            <h2>Profilo di: <em>Emilian Timofei (temporaneo)</em></h2>
            <div class="cart">
              <i class="fa-solid fa-shop"></i>
              <div className="added-poems"></div>
            </div>
          </header>
          <main>
            <div className="poem-search">
              <h3>Le poesie</h3>
              <input 
                type="search" 
                name="poem-search" 
                id="poem-search"
                placeholder="Cerca una poesia"
              />
            </div>
            <div className="poems">
              <div className="poem-card">

              </div>
              <div className="poem-card">
                
                </div>
                <div className="poem-card">
                
                </div>
                <div className="poem-card">
                
                </div>
            </div>

          </main>
          <footer>Footer (15% height)</footer>
        </section>
      </div>
    </>
  );
}

export default App;
