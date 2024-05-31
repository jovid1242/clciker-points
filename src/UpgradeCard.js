import React from 'react';
import './UpgradeCard.css';

const UpgradeCard = ({ upgrade, coins, purchased, onPurchase }) => {
  const { id, description, cost } = upgrade;

  const handlePurchaseClick = () => {
    onPurchase(id);
  };

  return (
    <div className={`upgrade-card ${purchased ? 'purchased' : ''}`}>
      <p>{description}</p>
      <p>Стоимость: {cost} монет</p>
      <button 
        className="purchase-button" 
        onClick={handlePurchaseClick} 
        disabled={coins < cost || purchased}>
        {purchased ? 'Куплено' : 'Купить'}
      </button>
    </div>
  );
};

export default UpgradeCard;
