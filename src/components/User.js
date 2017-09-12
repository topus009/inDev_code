import React from 'react';

const User = ({ user, roles, UserActions, PageActions, selectedItem }) => {
  // создание дропдауна ролей
  let li = roles.map((item, id) => {
    return <li 
            id={item.id} 
            className={user.dropdown_opened ? "opened_li" : "closed_li"} 
            onClick={(e) => UserActions.choose_role(e.target.innerText)}
            key={id}>{item.name}
          </li>
  });
  // перевод значения роли в текст
  let currentRole = roles.find(e => e.id === selectedItem.post).name;

  return (
    <div className="user">
    <div className="header">Редактирование</div>
    <form className="edit_form">
      {/* ====================== АВАТАР ==================== */}
      <img className="avatar" src={user.new_image.base64 || selectedItem.image} alt=""/>
      <label htmlFor="file" className="new_avatar"></label>
      <input 
        type="file" 
        name="file" 
        id="file" 
        className="input_file"
        onChange={(e) => UserActions.load_file(selectedItem.id, e.target.files[0])}
      />
      {/* ====================== ФАМИЛИЯ ==================== */}
      <div 
        className={"last_name_form input_field " + 
          (selectedItem.last_name.length > 0 ? "typing" : "") + ' ' + 
          (user.errors.last_name.length > 0 ? 'error_color' : '')
        } 
        data-title="! Недопустимый ввод">
        <label className="" htmlFor="last_name">Фамилия</label>
        <input  
          id="last_name"
          className={user.errors.last_name.length > 0 ? 'error_color' : ''} 
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          autoComplete="off" 
          value={selectedItem.last_name}
        />
      </div>
      {/* ====================== ИМЯ ========================= */}
      <div 
      className={"first_name_form input_field " + 
        (selectedItem.first_name.length > 0 ? "typing" : "") + ' ' + 
        (user.errors.first_name.length > 0 ? 'error_color' : '')
      } 
      data-title="! Недопустимый ввод">
        <label className="" htmlFor="first_name">Имя</label>
        <input 
          id="first_name"
          className={user.errors.first_name.length > 0 ? 'error_color' : ''}
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          autoComplete="off" 
          value={selectedItem.first_name}
        />
      </div>
      {/* ====================== ДЕНЬ РОЖДЕНИЯ =================== */}
      <div 
      className={"birth_date_form input_field " + 
        (selectedItem.birth_date.length > 0 ? "typing" : "") + ' ' + 
        (user.errors.birth_date.length > 0 ? 'error_color' : '')
      } 
      data-title="! Недопустимый ввод">
        <label className="" htmlFor="birth_date">Дата рождения</label>
        <input  
          id="birth_date"
          className={user.errors.birth_date.length > 0 ? 'error_color' : ''}
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text"
          autoComplete="off" 
          value={selectedItem.birth_date}
        />
      </div>
      {/* ====================== РОЛЬ =========================== */}
      <div className="select input_field">
        <ul className={user.dropdown_opened ? "opened_select" : "closed_select"}>
          <div 
            id="post"
            onClick={() => UserActions.open_dropdown()}>
          {user.selectedRole !== null ? user.selectedRole : currentRole}
          </div>
          {li}
        </ul>
      </div>
      {/* ====================== О СЕБЕ ========================= */}
      <div 
      className={"description_form input_field " + 
        (selectedItem.description.length > 0 ? "typing" : "") + ' ' + 
        (user.errors.description.length > 0 ? 'error_color' : '')
      } 
      data-title="! Недопустимый ввод">
        <label className="" htmlFor="description">Характеристика</label>
        <textarea 
          id="description"
          className={user.errors.description.length > 0 ? 'error_color' : ''}
          onChange={e => UserActions.change(e.target.id, e.target.value)} 
          type="text" 
          value={selectedItem.description}>
        </textarea>
      </div>
      {/* ====================== СОХРАНИТЬ / УДАЛИТЬ ========================= */}
      <input 
        className="save" 
        onClick={() => {
          UserActions.check_errors(selectedItem); 
          PageActions.save_item(selectedItem, user.errors);
          UserActions.close_edit(); 
        }} 
        type="button" 
        value="Сохранить"
      />
      <input 
        className="delete" 
        onClick={() => {
          PageActions.delete_item(selectedItem);
          UserActions.close_edit(); 
        }} 
        type="button" 
        value="Удалить"
      />
    </form>
  </div>
  );
}

export default User