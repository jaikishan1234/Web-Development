import React from "react";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="header">
        <h2>About Horizon</h2>
        <p>
          At Horizon, we don't just play tennis — we live it. Since 2021, our
          club has been a home for players of all levels, from eager beginners
          to seasoned pros.
        </p>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="icon">
            <img src="tennis-court.png" alt="" />
          </div>
          <p className="title">Professional hard courts</p>
          <p className="desc">
            with tournament-grade lighting & climate control — play in{" "}
            <span>perfect conditions, in any season. </span>
          </p>
          <div className="toggle">
            <span className="dot"></span>
            <span className="label">Game Mode</span>
          </div>
        </div>

        <div className="content-center">
          <img src="/coach.avif" alt="Private and group lessons" />
          <div className="badge">Private & Group Lessons</div>
        </div>

        <div className="content-right">
          <h3>
            100+ <span>Pro Coaches</span>
          </h3>
          <p className="desc">
            Certified professionals ready to boost your <br /> game from first
            serve to tournament level.
          </p>

          <div className="levels">
            <div className="level beginner">
              <span>Beginner</span>
              <div className="dots">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <span className="value">55</span>
            </div>

            <div className="level intermediate">
              <span>Intermediate</span>
              <div className="dots">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <span className="value">40</span>
            </div>

            <div className="level advanced">
              <span>Advanced</span>
              <div className="dots">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <span className="value">35</span>
            </div>
          </div>
        </div>
      </div>

      <div className="para">
        <p>A few more facts about us in numbers</p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>12 000+</h3>
          <p>Hours of play annually</p>
        </div>

        <div className="stat">
          <h3>89%</h3>
          <p>Player Retention Rate</p>
        </div>

        <div className="stat">
          <h3>1,200+</h3>
          <p>Active Members</p>
        </div>

        <div className="stat">
          <h3>125+</h3>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
