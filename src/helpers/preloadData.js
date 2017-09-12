export function preloadList() {
  // запрос списка персонажей
  let url = 'http://avengers.view.indev-group.eu/test_api/staff/?query=';
  return request(url);
}

export function preloadRoles() {
  // запрос списка ролей
  let url = 'http://avengers.view.indev-group.eu/test_api/posts/';
  return request(url);
}
    
function request(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, false);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
      } 
      else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    
    xhr.onerror = function() {
      reject(new Error('Network Error'));
    };

    xhr.send();
  });
}