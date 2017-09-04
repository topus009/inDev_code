import React from 'react';
import ListItem from './ListItem';

const Page = ({ list }) => {
      let rows

      if (list.length !== 0 ) {
          rows = list.map((item, id) => {
                      return <ListItem item={item} key={id} />
                   });
      }
      else {
        // rows = <tr className='undefined'><td className='first_row'>Вакансий не найдено!</td><td className='second_row'></td></tr>
      }
        return (
          <div className="page">
            <form action="" className="list_form">
              <div className="search_form input_field" data-title="! Поле не заполнено">
                <label className="" for="search">Поиск</label>
                <input id="search" type="text" autocomplete="off" value="Поиск"/>
              </div>
              <div className="sort input_field">
                <ul className="closed_select">
                  <div id="sort">По возрасту</div>
                  <li className="closed_li">По возрасту</li>
                  <li className="closed_li">По имени</li>
                  <li className="closed_li">По званию</li>
                </ul>
              </div>
            </form>
            {rows}
          </div>
        );
      }

export default Page