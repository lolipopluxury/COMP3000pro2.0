export default {
  get(option) {
    return new Promise((resolve,reject) =>{
      fetch(option.url,{  
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          ...option.header
        }
      }).then((response) => response.json())
      .then((responseJson) => { 
        resolve(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
    })  
  },
}

