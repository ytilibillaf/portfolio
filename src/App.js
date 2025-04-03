import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="lang-switcher">
            <button id="lang-en">EN</button>
            <button id="lang-ja">JP</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to My World</h1>
        </section>
        <section id="about">
          <h1>About Me</h1>
          <p>シンプルで美しいデザインを追求したポートフォリオへようこそ。</p>
        </section>
        <section id="works">
          <h2>My Works</h2>
          <p>こちらは私の作品集です。</p>
          <div className="gallery">
            <img src="assets/image1.jpg" alt="作品1" />
            <img src="assets/image2.jpg" alt="作品2" />
            <img src="assets/image3.jpg" alt="作品3" />
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>お問い合わせはお気軽にどうぞ。</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
