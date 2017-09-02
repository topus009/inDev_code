export default function preload_areas() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    
    let areas = 'https://api.hh.ru/areas'

    xhr.open('GET', areas, false);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
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
      
