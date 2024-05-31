import React from 'react';
import MissionCard from './MissionCard';
import './MissionsPage.css';

const MissionsPage = ({ missions, coins, completedMissions, onCompleteMission }) => {
  return (
    <div className="missions-page">
      <h2>Миссии</h2>
      {missions.map(mission => (
        <MissionCard 
          key={mission.id} 
          mission={mission} 
          coins={coins} 
          completed={completedMissions.includes(mission.id)} 
          onComplete={onCompleteMission}
        />
      ))}
    </div>
  );
};

export default MissionsPage;
