import React from 'react';
import ListItem from './ListItem';

const Page = ({ page, list, roles, UserActions, PageActions }) => {
  
  let rows = list.map((item, id) => {
    let currentRole = roles.find(e => e.id === item.post).name;
    return <ListItem 
              item={item} 
              key={id} 
              UserActions={UserActions} 
              PageActions={PageActions}
              currentRole={currentRole}
            />
  });

      
  return (
    <div className="page">
      <form action="" className="list_form">
        <div className={"search_form input_field " + (page.search_input.length > 0 ? "typing" : "")} data-title="! Поле не заполнено">
          <label className="" htmlFor="search">Поиск</label>
          <input 
          id="search"
          onChange={e => PageActions.change_search_input(e.target.value)}  
          type="text" 
          autoComplete="off" 
          defaultValue={page.search_input}/>
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