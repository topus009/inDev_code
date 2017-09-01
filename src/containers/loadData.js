export default function loadData(vacancy,city) {
  let hh_name = 'Россия';
  let hh_area = city;
  let hh_per_page = '40';
  let hh_text = vacancy;

  return new Promise(function(resolve, reject) {

    let hh_url = 'https://api.hh.ru/vacancies?' 
                                                + 'text=' + hh_text 
                                                + '&name=' + hh_name 
                                                + '&area=' + hh_area 
                                                + '&per_page=' + hh_per_page;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', hh_url, false);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } 
      else {
        let error = new Error(this.statusText);
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
      
