import React from 'react';
import ListItem from './ListItem';

const Page = ({ list, PageActions }) => {
      let rows = list.map((item, id) => {
        return <ListItem item={item} key={id} PageActions={PageActions}/>
      });
      
        return (
          <div className="page">
            <form action="" className="list_form">
              <div className="search_form input_field" data-title="! Поле не заполнено">
                <label className="" htmlFor="search">Поиск</label>
                <input id="search" type="text" autoComplete="off" value=""/>
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
            <div className="list">
              {rows}
            </div>  
          </div>
        );
      }

export default Page