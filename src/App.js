import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clicker from './Clicker';
import MissionsPage from './MissionsPage';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [upgrades, setUpgrades] = useState([]);

  const handleClick = () => {
    const newCoins = coins + getMultiplier();
    setCoins(newCoins);
    if (newCoins >= level * 1000) {
      setLevel(level + 1);
    }
  };

  const missions = [
    { id: 1, description: 'Сделайте 10 кликов', goal: 10, reward: 5 },
    { id: 2, description: 'Сделайте 50 кликов', goal: 50, reward: 25 },
    { id: 3, description: 'Сделайте 100 кликов', goal: 100, reward: 50 },
    { id: 4, description: 'Сделайте 200 кликов', goal: 200, reward: 100 },
    { id: 5, description: 'Сделайте 500 кликов', goal: 500, reward: 250 },
    { id: 6, description: 'Нажмите на кнопку 10 раз за одну секунду', goal: 10, type: 'speed', reward: 100 },
    { id: 7, description: 'Соберите 1000 монет', goal: 1000, reward: 500 },
    { id: 8, description: 'Достигните 5 уровня', goal: 5000, type: 'level', reward: 1000 }
  ];

  const availableUpgrades = [
    { id: 1, description: 'Увеличить количество монет за клик в 2 раза', cost: 100, effect: 2 },
    { id: 2, description: 'Увеличить количество монет за клик в 5 раз', cost: 500, effect: 5 },
    { id: 3, description: 'Увеличить количество монет за клик в 10 раз', cost: 1000, effect: 10 },
  ];

  const handleCompleteMission = (missionId) => {
    if (!completedMissions.includes(missionId)) {
      const mission = missions.find(mission => mission.id === missionId);
      setCoins(coins + mission.reward);
      setCompletedMissions([...completedMissions, missionId]);
    }
  };

  const handlePurchaseUpgrade = (upgradeId) => {
    const upgrade = availableUpgrades.find(upg => upg.id === upgradeId);
    if (coins >= upgrade.cost && !upgrades.includes(upgradeId)) {
      setCoins(coins - upgrade.cost);
      setUpgrades([...upgrades, upgradeId]);
    }
  };

  const getMultiplier = () => {
    return upgrades.reduce((acc, id) => {
      const upgrade = availableUpgrades.find(upg => upg.id === id);
      return acc * upgrade.effect;
    }, 1);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/missions">Миссии</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <Clicker 
              coins={coins}
              level={level}
              onClick={handleClick}
              upgrades={upgrades}
              availableUpgrades={availableUpgrades}
              onPurchaseUpgrade={handlePurchaseUpgrade}
            />
          } />
          <Route path="/missions" element={
            <MissionsPage 
              missions={missions}
              coins={coins}
              completedMissions={completedMissions}
              onCompleteMission={handleCompleteMission}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
