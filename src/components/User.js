import React from 'react';

const User = ({ user }) => {
        return (
          <div class="user">
          <div class="header">Редактирование</div>
          <form class="edit_form">
            <img class="avatar" src="http://view.indev-group.eu/images/test_api/torch.jpg"/>
            <div class="lastName_form input_field" data-title="! Поле не заполнено">
              <label class="" for="lastName">Фамилия</label>
              <input  id="lastName" type="text" autocomplete="off"/>
            </div>
            <div class="firstName_form input_field" data-title="! Поле не заполнено">
              <label class="" for="firstName">Имя</label>
              <input id="firstName" type="text" autocomplete="off"/>
            </div>
            <div class="bdate_form input_field" data-title="! Поле не заполнено">
              <label class="" for="bdate">Дата рождения</label>
              <input  id="bdate" type="text" autocomplete="off"/>
            </div>
            <div class="select input_field">
              <ul class="closed_select" data-title="! Поле не заполнено">
                <div id="role">Звание</div>
                <li class="closed_li">Рядовой</li>
                <li class="closed_li">Член специального отряда Леви</li>
                <li class="closed_li">Воин</li>
              </ul>
            </div>
            <div class="textarea_form input_field" data-title="! Поле не заполнено">
              <label class="" for="textarea">Характеристика</label>
              <textarea id="textarea" type="text" placeholder="Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами. Саша - очень отважный человек. Оказавшись на волосок от гибели во время обороны Троста, она все же сумела побороть свой страх и вступить в Разведкорпус. А позднее девушка рискнула жизнью ради спасения незнакомого ребенка, схватившись с титаном на открытой местности, будучи вооруженной лишь луком и стрелами."></textarea>
            </div>
            <input class="save" type="button" value="Сохранить"/>
            <input class="delete" type="button" value="Удалить"/>
          </form>
        </div>
        );
      }

export default User