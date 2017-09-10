
export function sort(sortBy, list) {
  switch (sortBy) {

    case 'По возрасту':
        list.sort((a, b) => {
          let x = a.birth_date.toLowerCase();
          let y = b.birth_date.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
    break;

    case 'По имени':
      list.sort((a, b) => {
        let x = a.first_name.toLowerCase();
        let y = b.first_name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    break;

    case 'По званию':
      list.sort((a, b) => {
        let x = a.post;
        let y = b.post;
        return x < y ? -1 : x > y ? 1 : 0;
      });
    break;
  }

  return list
}


