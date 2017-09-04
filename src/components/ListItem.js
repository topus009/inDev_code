import React from 'react';

const ListItem = ({ item }) => {
      return (
        <div class="list">
          <div class="item">
            <img class="avatar" src="http://view.indev-group.eu/images/test_api/torch.jpg"/>
            <div class="info">
              <div class="name">Энни Леонхарт</div>
              <div class="bdate">22 Марта, 834</div>
              <div class="role">Воин</div>
              <input class="edit" type="button" value="Редактировать"/>
            </div>
          </div>
        </div>
      );
  }

  export default ListItem