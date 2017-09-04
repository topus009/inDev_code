import React from 'react';

const User = ({ user, roles, UserActions, selectedItem }) => {
  
  let li = roles.map((item, id) => {
    return <li id={item.id} className="closed_li" key={id}>{item.name}</li>
  });

  let currentRole = roles.find(e => e.id === selectedItem.post).name;
  
  return (
    <div className="user">
    <div className="header">Редактирование</div>
    <form className="edit_form">
      <img className="avatar" src={selectedItem.image} alt=""/>

      <div className="lastName_form input_field" data-title="! Поле не заполнено">
        <label className="" htmlFor="lastName">Фамилия</label>
        <input  
        id="lastName" 
        onChange={e => console.warn(e.target)} 
        type="text" 
        autoComplete="off" 
        value={selectedItem.last_name}
        />
      </div>

      <div className="firstName_form input_field" data-title="! Поле не заполнено">
        <label className="" htmlFor="firstName">Имя</label>
        <input 
        id="firstName" 
        type="text" 
        autoComplete="off" 
        value={selectedItem.first_name}
        />
      </div>

      <div className="bdate_form input_field" data-title="! Поле не заполнено">
        <label className="" htmlFor="bdate">Дата рождения</label>
        <input  
        id="bdate" 
        type="text" 
        autoComplete="off" 
        value={selectedItem.birth_date}
        />
      </div>

      <div className="select input_field">
        <ul className="closed_select" data-title="! Поле не заполнено">
          <div id="role">{currentRole}</div>
          {li}
        </ul>
      </div>

      <div className="textarea_form input_field" data-title="! Поле не заполнено">
        <label className="" htmlFor="textarea">Характеристика</label>
        <textarea id="textarea" type="text" value={selectedItem.description}></textarea>
      </div>

      <input className="save" type="button" value="Сохранить"/>
      <input className="delete" type="button" value="Удалить"/>
    </form>
  </div>
  );
}

export default User