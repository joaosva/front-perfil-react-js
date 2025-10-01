import React from "react";
import "./UserCard.css";

export default function UserCard() {
  return (
    <div className="card">
      {/* Header */}
      <div className="header">
        <div className="avatar">
          <span className="plus">+</span>
        </div>
      </div>

      {/* Nome e Bandeira */}
      <h2 className="name">Usuário</h2>
      <img
        src="src/components/flag.png"
        alt="Bandeira do Brasil"
        className="flag"
      />

      {/* XP */}
      <div className="xp-bar">
        <div className="xp-progress" style={{ width: "40%" }}></div>
      </div>
      <p className="xp-text">300 / 800 XP</p>

      {/* Stats */}
      <div className="stats">
        <div className="stat-box">
          <span className="icon">⭐</span>
          <p>Level</p>
          <h3>14</h3>
        </div>
        <div className="stat-box">
          <span className="icon">👑</span>
          <p>Rank Mundial</p>
          <h3>#239</h3>
        </div>
        <div className="stat-box">
          <span className="icon">👥</span>
          <p>Seguidores</p>
          <h3>57</h3>
        </div>
      </div>

      {/* Badges */}
      <h3 className="section-title">Badges</h3>
      <div className="badges">
        <div className="badge filled">🏅</div>
        <div className="badge filled">📚</div>
        <div className="badge empty">+</div>
        <div className="badge empty">+</div>
        <div className="badge filled">⭐</div>
        <div className="badge empty">+</div>
      </div>

      {/* Tarefas Diárias */}
      <h3 className="section-title">Tarefas Diarias</h3>
      <div className="task">
        <p>Leia 20 páginas</p>
        <div className="task-bar">
          <div className="task-progress" style={{ width: "60%" }}></div>
        </div>
        <span>3 horas</span>
      </div>
      <div className="task">
        <p>Converse com um seguidor</p>
        <div className="task-bar">
          <div className="task-progress" style={{ width: "100%" }}></div>
        </div>
        <span>3 horas</span>
      </div>
    </div>
  );
}
