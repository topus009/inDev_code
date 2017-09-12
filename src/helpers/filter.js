export function filter(list, value) {
  let str = value.toLowerCase();

  let new_list = list.filter(i => {
    // можно конечно нормальный поиск сделать, но я уже устал делать - и так более менее нормально ищет - главное - принцип
    return i.first_name.toLowerCase().match(str) || i.last_name.toLowerCase().match(str)
  });
  
  return new_list
}

