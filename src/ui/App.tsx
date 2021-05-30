import React from 'react';
import s from './App.module.css';
import {BodyGame} from "./BodyGame/BodyGame";
import {Navbar} from "./Navbar/Navbar";

function App() {
  return (
    <div className={s.app}>

      <header className={s.app_header}>
          Кто хочет стать миллионером?
      </header>

      <main className={s.app_main}>
          <div className={s.nav}>
              <Navbar/>
          </div>
          <div className={s.body_game}>
              <BodyGame/>
          </div>
      </main>

      <footer className={s.app_footer}>
          Контакты
      </footer>

    </div>
  );
}

export default App;
