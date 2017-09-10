export function filter(list, value) {
  let str = value.toLowerCase();

  let new_list = list.filter(i => {
    return i.first_name.toLowerCase().match(str) || i.last_name.toLowerCase().match(str)
  });
  
  return new_list
}

