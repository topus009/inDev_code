import React from 'react';
import ListItem from './ListItem';

const VacancyList = ({ list/*, filter */}) => {
      let rows

      if (list.length !== 0 ) {
          rows = list.map((item, id) => {
                      return <ListItem item={item} key={id} />
                   });
      }
      else {
        rows = <tr className='undefined'><td className='first_row'>Вакансий не найдено!</td><td className='second_row'></td></tr>
      }
        return (
          <table className='list'>
            <caption>СПИСОК ВАКАНСИЙ</caption>
            <thead>
              <tr>
                <th className='first_row'>Название</th>
                <th className='second_row'>Зарплата</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }

export default VacancyList