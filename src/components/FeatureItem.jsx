import React from 'react';
import dropinvisitSvg from '../assets/icons/dropinvisit.svg';
import neighborhoodwalksSvg from '../assets/icons/neighborhoodwalks.svg';
import dogparkvisitSvg from '../assets/icons/dogparkvisit.svg';
import dogbeachvisitSvg from '../assets/icons/dogbeachvisit.svg';
import hikingadventuresSvg from '../assets/icons/hikingadventures.svg';
import inhomedogsittingSvg from '../assets/icons/inhomedogsitting.svg';

const FeatureItem = ({ title, description, shortDescription, index, useShortDescription = false }) => {
  const isEven = index % 2 === 0;

  const getIcon = (title) => {
    switch(title) {
      case 'Drop-in Visits':
        return dropinvisitSvg;
      case 'Neighborhood Walks':
        return neighborhoodwalksSvg;
      case 'Dog Park Visits':
        return dogparkvisitSvg;
      case 'Dog Beach Visits':
        return dogbeachvisitSvg;
      case 'Hiking Adventures':
        return hikingadventuresSvg;
      case 'In Home Dog Sitting':
        return inhomedogsittingSvg;
      default:
        return null;
    }
  };

  const iconToShow = getIcon(title);

  return (
    <div className={`feature-item ${isEven ? 'even' : 'odd'}`} style={{ width: '100%' }}>
      <div className="feature-item-content" style={{ width: '100%' }}>

        <h3>{title}</h3>
        <br/>
        {iconToShow && (
          <img 
            src={iconToShow}
            alt={`${title} icon`} 
            className="feature-icon"
          />
        )}
        <div>
          {useShortDescription ? shortDescription : description}
        </div>
        <h4>more info</h4>
      </div>
    </div>
  );
};

export default FeatureItem;


