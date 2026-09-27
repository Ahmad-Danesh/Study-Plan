import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="small-title">SMART STUDY PLANNER</p>

          <h1>
            Plan Your Study.
            <br />
            Achieve Your Goals.
          </h1>

          <p className="hero-description">
            Organize your subjects, manage your study time, and make
            progress every day.
          </p>

          <Link to="/subjects" className="main-button">
            View Subjects
            <span>→</span>
          </Link>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-header">
            <div>
              <p>This Week</p>
              <h2>Study Progress</h2>
            </div>

            <div className="calendar-icon">📅</div>
          </div>

          <div className="week">
            <div className="day">
              <span>Mon</span>
              <strong>2h</strong>
            </div>

            <div className="day active">
              <span>Tue</span>
              <strong>3h</strong>
            </div>

            <div className="day">
              <span>Wed</span>
              <strong>1h</strong>
            </div>

            <div className="day">
              <span>Thu</span>
              <strong>2h</strong>
            </div>

            <div className="day">
              <span>Fri</span>
              <strong>4h</strong>
            </div>
          </div>

          <div className="study-progress">
            <div className="progress-info">
              <span>Weekly Goal</span>
              <strong>75%</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <p className="small-title">STUDY SMARTER</p>
          <h2>Everything You Need</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Plan</h3>
            <p>
              Organize your study schedule and create a clear learning
              plan.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Study</h3>
            <p>
              Focus on your subjects and build a consistent study
              routine.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Achieve</h3>
            <p>
              Track your progress and move closer to your learning
              goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;