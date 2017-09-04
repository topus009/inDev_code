import React from 'react';

const User = ({ user }) => {
        return (
          <div className="user">
          <div className="header">Редактирование</div>
          <form className="edit_form">
            <img className="avatar" src="http://view.indev-group.eu/images/test_api/torch.jpg"/>
            <div className="lastName_form input_field" data-title="! Поле не заполнено">
              <label className="" for="lastName">Фамилия</label>
              <input  id="lastName" type="text" autocomplete="off"/>
            </div>
            <div className="firstName_form input_field" data-title="! Поле не заполнено">
              <label className="" for="firstName">Имя</label>
              <input id="firstName" type="text" autocomplete="off"/>
            </div>
            <div className="bdate_form input_field" data-title="! Поле не заполнено">
              <label className="" for="bdate">Дата рождения</label>
              <input  id="bdate" type="text" autocomplete="off"/>
            </div>
            <div className="select input_field">
              <ul className="closed_select" data-title="! Поле не заполнено">
                <div id="role">Звание</div>
                <li className="closed_li">Рядовой</li>
                <li className="closed_li">Член специального отряда Леви</li>
                <li className="closed_li">Воин</li>
              </ul>
            </div>
            <div className="textarea_form input_field" data-title="! Поле не заполнено">
              <label className="" for="textarea">Характеристика</label>
              <textarea id="textarea" type="text" placeholder="Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами. Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами."></textarea>
            </div>
            <input className="save" type="button" value="Сохранить"/>
            <input className="delete" type="button" value="Удалить"/>
          </form>
        </div>
        );
      }

export default User