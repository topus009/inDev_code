import React from 'react';

const ListItem = ({ item }) => {
      let price = '';
      let salary = item.salary;

      if (salary !== null) {
        if (salary.from && salary.to !== null) {
          price = 'от ' + salary.from + ' до ' + salary.to;
        }
        else if (salary.from !== null) {
          price = 'до ' + salary.from;
        }
        else if (salary.to !== null) {
          price = 'от ' + salary.to;
        }
      }
      else {
        price = 'не указана';
      }
      return (
        <tr className='list_item'>
          <td className='first_row'>
            <a href={item.alternate_url}>{item.name} --> <em><b>
            {item.area.name}</b></em></a>
          </td>
          <td className='second_row'>
            {price}
          </td>
        </tr>
      );
  }

  export default ListItem