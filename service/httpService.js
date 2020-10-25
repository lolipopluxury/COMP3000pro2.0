export default {
  get(option) {
    fetch(option.url,{  
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        ...option.header
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    })
  },
}

