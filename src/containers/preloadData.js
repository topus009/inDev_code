export default function preloadData() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    
    // let data = 'http://avengers.view.indev-group.eu/test_api/staff/'
    let data = 'http://avengers.view.indev-group.eu/test_api/staff/?query='

    xhr.open('GET', data, false);
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
      
