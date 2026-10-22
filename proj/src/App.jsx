
import './App.css';

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#">my.space ♡</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">✿ HELLO, WORLD!</p>
        <h1>
          A little corner
          <br />
          of <span>my internet.</span>
        </h1>
        <p className="intro">
          Computer science student, aspiring developer,
          and professional daydreamer.
        </p>
        <a className="button" href="#projects">
          Explore my work ↗
        </a>
        <div className="decoration">✿</div>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
        <h2>Currently growing 🌷</h2>
        <p>
          I'm learning to build things with code, one little
          project at a time. This is where I'll collect my
          experiments, ideas, and things I'm proud of.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">02 — THINGS I'VE MADE</p>
        <h2>My projects</h2>
        <div className="projects">
          <article className="project-card">
            <span>✿ 01</span>
            <h3>Project One</h3>
            <p>A little idea brought to life with code.</p>
            <a href="#">View project ↗</a>
          </article>

          <article className="project-card">
            <span>♡ 02</span>
            <h3>Project Two</h3>
            <p>Something interesting I'm experimenting with.</p>
            <a href="#">View project ↗</a>
          </article>

          <article className="project-card">
            <span>☆ 03</span>
            <h3>Project Three</h3>
            <p>More things coming soon. Stay tuned!</p>
            <a href="#">View project ↗</a>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">03 — SAY HELLO</p>
        <h2>Let's make something cool.</h2>
        <p>Have an idea? I'd love to hear about it.</p>
        <a className="button" href="mailto:your-email@example.com">
          Email me ♡
        </a>
      </section>

      <footer>
        made with ♡ and a little bit of code
      </footer>
    </main>
  );
}

export default App;

