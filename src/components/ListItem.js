import React from 'react';

const ListItem = ({ item, UserActions, PageActions, currentRole }) => {
      return (
        <div className="item">
          <img className="avatar" src={item.image} alt=""/>
          <div className="info">
            <div className="name">{item.first_name + " " + item.last_name}</div>
            <div className="birth_date">{item.birth_date}</div>
            <div className="post">{currentRole}</div>
          </div>
          <input 
            onClick={() => UserActions.edit(item)} 
            className="edit" 
            type="button" 
            value="Редактировать"/>
        </div>
      );
  }

  export default ListItem


