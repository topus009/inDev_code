import React from 'react';

const User = ({ user, roles, UserActions, PageActions, selectedItem }) => {
  
  let li = roles.map((item, id) => {
    return <li id={item.id} className="closed_li" key={id}>{item.name}</li>
  });

  let currentRole = roles.find(e => e.id === selectedItem.post).name;

  return (
    <div className="user">
    <div className="header">Редактирование</div>
    <form className="edit_form">
      <img className="avatar" src={selectedItem.image} alt=""/>

      <div 
        className={"last_name_form input_field " + (selectedItem.last_name.length > 0 ? "typing" : "")} data-title="! Поле не заполнено">
        <label className="" htmlFor="last_name">Фамилия</label>
        <input  
          id="last_name" 
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          autoComplete="off" 
          defaultValue={selectedItem.last_name}
        />
      </div>

      <div className={"first_name_form input_field " + (selectedItem.first_name.length > 0 ? "typing" : "")} data-title="! Поле не заполнено">
        <label className="" htmlFor="first_name">Имя</label>
        <input 
          id="first_name"
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          autoComplete="off" 
          defaultValue={selectedItem.first_name}
        />
      </div>

      <div className="birth_date_form input_field" data-title="! Поле не заполнено">
        <label className="" htmlFor="birth_date">Дата рождения</label>
        <input  
          id="birth_date"
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          autoComplete="off" 
          defaultValue={selectedItem.birth_date}
        />
      </div>

      <div className="select input_field">
        <ul className="closed_select" data-title="! Поле не заполнено">
          <div id="post">{currentRole}</div>
          {li}
        </ul>
      </div>

      <div className={"description_form input_field " + (selectedItem.description.length > 0 ? "typing" : "")} data-title="! Поле не заполнено">
        <label className="" htmlFor="description">Характеристика</label>
        <textarea 
          id="description"
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          defaultValue={selectedItem.description}>
        </textarea>
      </div>

      <input className="save" /*onClick={PageActions.save(selectedItem)}*/ type="button" value="Сохранить"/>
      <input className="delete" type="button" value="Удалить"/>
    </form>
  </div>
  );
}

export default User