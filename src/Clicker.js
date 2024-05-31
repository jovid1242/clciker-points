import React from 'react';
import UpgradeCard from './UpgradeCard';
import './Clicker.css';

const Clicker = ({ coins, level, onClick, upgrades, availableUpgrades, onPurchaseUpgrade }) => {
  return (
    <div className="clicker-container">
      <div className="clicker-header">
        <div className="coins-display">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/987/large/shiny-coins-clipart-design-illustration-free-png.png" alt="Coin" className="coin-icon" />
          <span>{coins}</span>
        </div>
        <div className="level-display">
          <span>Уровень {level}</span>
        </div>
      </div>
      <div className="clicker">
        <button className="click-button" onClick={onClick}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/987/large/shiny-coins-clipart-design-illustration-free-png.png" alt="Click" className="click-icon" />
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(coins % 1000) / 10}%` }}></div>
      </div>
      <div className="upgrades">
        <h2>Улучшения</h2>
        {availableUpgrades.map(upgrade => (
          <UpgradeCard 
            key={upgrade.id} 
            upgrade={upgrade} 
            coins={coins} 
            purchased={upgrades.includes(upgrade.id)}
            onPurchase={onPurchaseUpgrade}
          />
        ))}
      </div>
    </div>
  );
};

export default Clicker;
