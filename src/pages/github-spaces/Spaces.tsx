// import Header from "./Header";
import Hero1 from "./Hero1";
import Section2 from "./Section2";
import "./normalize.css";
import css from "./spaces.module.css";

function Spaces() {
  return (
    <main className={css.main}>
      <div
        className={css.top}
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        {/* <Header /> */}
        <Hero1 />
        <Section2 />
        
      </div>
    </main>
  );
}

export default Spaces;
