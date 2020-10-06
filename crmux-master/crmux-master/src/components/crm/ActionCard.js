import React from 'react';


function ActionCard(props) {
    return (
        <div className="action">
          <img className="crm-image"
          src={props.imagePath}
          alt={props.alt}
          />
          <div className="crm-description">
              {props.description} 
          </div>
            
        </div>
    );
}



export default ActionCard;