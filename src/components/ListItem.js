import React from 'react';

const ListItem = ({ item }) => {
      return (
        <div className="list">
          <div className="item">
            <img className="avatar" src="http://view.indev-group.eu/images/test_api/torch.jpg"/>
            <div className="info">
              <div className="name">Энни Леонхарт</div>
              <div className="bdate">22 Марта, 834</div>
              <div className="role">Воин</div>
              <input className="edit" type="button" value="Редактировать"/>
            </div>
          </div>
        </div>
      );
  }

  export default ListItem