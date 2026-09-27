function Subjects() {
  return (
    <main className="subjects-page">
      <section className="subjects-header">
        <p className="small-title">YOUR LEARNING</p>

        <h1>Study Subjects</h1>

        <p>
          Choose a subject and keep improving your knowledge step by
          step.
        </p>
      </section>

      <section className="subjects-grid">
        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon math">📐</div>
            <span>Intermediate</span>
          </div>

          <h2>Mathematics</h2>

          <p>Improve your mathematical thinking and problem solving.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>80%</strong>
          </div>

          <div className="subject-progress">
            <div className="math-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>12 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>

        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon english">A</div>
            <span>Intermediate</span>
          </div>

          <h2>English</h2>

          <p>Develop your vocabulary, grammar, reading, and listening.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>70%</strong>
          </div>

          <div className="subject-progress">
            <div className="english-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>15 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>

        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon physics">⚡</div>
            <span>Beginner</span>
          </div>

          <h2>Physics</h2>

          <p>Explore motion, energy, forces, and the world of physics.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>45%</strong>
          </div>

          <div className="subject-progress">
            <div className="physics-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>8 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>

        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon chemistry">⚗️</div>
            <span>Beginner</span>
          </div>

          <h2>Chemistry</h2>

          <p>Learn about atoms, elements, reactions, and compounds.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>55%</strong>
          </div>

          <div className="subject-progress">
            <div className="chemistry-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>10 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>

        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon computer">💻</div>
            <span>Intermediate</span>
          </div>

          <h2>Computer Science</h2>

          <p>Learn programming, technology, and computer fundamentals.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>65%</strong>
          </div>

          <div className="subject-progress">
            <div className="computer-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>14 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>

        <div className="subject-card">
          <div className="subject-top">
            <div className="subject-icon biology">🧬</div>
            <span>Beginner</span>
          </div>

          <h2>Biology</h2>

          <p>Discover cells, organisms, nature, and human biology.</p>

          <div className="subject-info">
            <span>Progress</span>
            <strong>40%</strong>
          </div>

          <div className="subject-progress">
            <div className="biology-progress"></div>
          </div>

          <div className="subject-bottom">
            <span>9 Study Sessions</span>
            <button>View Subject</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Subjects;