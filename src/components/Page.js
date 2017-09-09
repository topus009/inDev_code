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
          value={page.search_input}/>
        </div>
        <div className="sort input_field">
          <ul className={page.dropdown_opened ? "opened_select" : "closed_select"}>
            <div id="sort" onClick={() => PageActions.open_dropdown()}>{page.sort_by !== null ? page.sort_by : '12345'}</div>
            <li 
            className={page.dropdown_opened ? "opened_li" : "closed_li"}
            onClick={(e) => PageActions.choose_sort(e.target.innerText)}
            >По возрасту</li>
            <li 
            className={page.dropdown_opened ? "opened_li" : "closed_li"}
            onClick={(e) => PageActions.choose_sort(e.target.innerText)}
            >По имени</li>
            <li 
            className={page.dropdown_opened ? "opened_li" : "closed_li"}
            onClick={(e) => PageActions.choose_sort(e.target.innerText)}
            >По званию</li>
          </ul>
          <div className={"sort_direction " + "down"}></div>
        </div>
      </form>
      <div className="list">
        {rows}
      </div>  
    </div>
  );
}

export default Page