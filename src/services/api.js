const options = {
  method: 'GET', 
  headers: {
    Accept: 'application/json', 
    token: 'qwwer'
  }};

fetch('https://api.atendare.com/v1/lead?pageIndex=0&pageSize=15', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));





  const options = {
    method: 'GET',
    url: 'https://api.atendare.com/v1/lead/12',
    headers: {Accept: 'application/json', Token: '123456'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

const options = {
  method: 'GET',
  url: 'https://api.atendare.com/v1/lead',
  params: {
    pageIndex: '0', 
    pageSize: '15'
  },
  headers: {
    Accept: 'application/json', 
    token: 'qwwer'
  }
};

axios.request(options).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});


