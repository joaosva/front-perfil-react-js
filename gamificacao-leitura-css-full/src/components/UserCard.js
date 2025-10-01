import React from "react";
import "./UserCard.css";

export default function UserCard() {
  return (
    <div className="card">
      {/* Header */}
      <div className="header">
        <div className="avatar"></div>
        <h2 className="name">Kethyllyn R.</h2>
        <span className="flag">🇧🇷</span>
      </div>

      {/* XP */}
      <div className="xp-bar">
        <div className="xp-progress" style={{ width: "40%" }}></div>
      </div>
      <p className="xp-text">300 / 800 XP</p>

      {/* Stats */}
      <div className="stats">
        <div>
          <p className="label">Level</p>
          <p className="value">14</p>
        </div>
        <div>
          <p className="label">Rank Mundial</p>
          <p className="value">#239</p>
        </div>
        <div>
          <p className="label">Seguidores</p>
          <p className="value">57</p>
        </div>
      </div>

      {/* Badges */}
      <h3 className="section-title">Badges</h3>
      <div className="badges">
        <div className="badge">🏅</div>
        <div className="badge">📚</div>
        <div className="badge empty">⭐</div>
        <div className="badge empty"></div>
        <div className="badge empty"></div>
        <div className="badge empty">⭐</div>
      </div>

      {/* Tarefas */}
      <h3 className="section-title">Tarefas Diarias</h3>
      <div className="task">
        <p>Leia 20 páginas</p>
        <div className="task-bar">
          <div className="task-progress" style={{ width: "75%" }}></div>
        </div>
        <p className="time">3 horas</p>
      </div>
      <div className="task">
        <p>Converse com um seguidor</p>
        <div className="task-bar">
          <div className="task-progress" style={{ width: "100%" }}></div>
        </div>
        <p className="time">3 horas</p>
      </div>
    </div>
  );
}
