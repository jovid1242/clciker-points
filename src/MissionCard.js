import React from 'react';
import './MissionCard.css';

const MissionCard = ({ mission, coins, completed, onComplete }) => {
  const { id, description, goal, reward, type } = mission;

  const handleButtonClick = () => {
    onComplete(id);
  };

  return (
    <div className={`mission-card ${completed ? 'completed' : ''}`}>
      <p>{description}</p>
      <p>Цель: {type === 'speed' ? `${goal} кликов за одну секунду` : `${goal} кликов`}</p>
      <p>Награда: {reward} монет</p>
      <p>Статус: {completed ? 'Выполнено' : 'Не выполнено'}</p>
      {!completed && coins >= goal && (
        <button className="complete-button" onClick={handleButtonClick}>
          Получить награду
        </button>
      )}
    </div>
  );
};

export default MissionCard;
