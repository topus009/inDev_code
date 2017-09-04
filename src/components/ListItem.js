import React from 'react';

const ListItem = ({ item }) => {
      return (
        <div className="item">
          <img className="avatar" src={item.image} alt=""/>
          <div className="info">
            <div className="name">{item.first_name + " " + item.last_name}</div>
            <div className="bdate">{item.birth_date}</div>
            <div className="role">Воин</div>
          </div>
          <input className="edit" type="button" value="Редактировать"/>
        </div>
      );
  }

  export default ListItem