import React from 'react';

const User = ({ user, roles }) => {
  let li;
  
        if (roles.length !== 0 ) {
            li = roles.map((item, id) => {
                        return <li id={item.id} className="closed_li" key={id}>{item.name}</li>
                     });
        }
        else {
          // rows = <tr className='undefined'><td className='first_row'>Вакансий не найдено!</td><td className='second_row'></td></tr>
        }



        return (
          <div className="user">
          <div className="header">Редактирование</div>
          <form className="edit_form">
            <img className="avatar" src="http://view.indev-group.eu/images/test_api/torch.jpg" alt=""/>
            <div className="lastName_form input_field" data-title="! Поле не заполнено">
              <label className="" htmlFor="lastName">Фамилия</label>
              <input  id="lastName" type="text" autoComplete="off"/>
            </div>
            <div className="firstName_form input_field" data-title="! Поле не заполнено">
              <label className="" htmlFor="firstName">Имя</label>
              <input id="firstName" type="text" autoComplete="off"/>
            </div>
            <div className="bdate_form input_field" data-title="! Поле не заполнено">
              <label className="" htmlFor="bdate">Дата рождения</label>
              <input  id="bdate" type="text" autoComplete="off"/>
            </div>
            <div className="select input_field">
              <ul className="closed_select" data-title="! Поле не заполнено">
                <div id="role">Звание</div>
                {li}
              </ul>
            </div>
            <div className="textarea_form input_field" data-title="! Поле не заполнено">
              <label className="" htmlFor="textarea">Характеристика</label>
              <textarea id="textarea" type="text" placeholder="Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами. Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами."></textarea>
            </div>
            <input className="save" type="button" value="Сохранить"/>
            <input className="delete" type="button" value="Удалить"/>
          </form>
        </div>
        );
      }

export default User