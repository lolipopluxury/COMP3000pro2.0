import { observable } from 'mobx';
import httpService from '../service/httpService';
import apiConfig from '../service/apiConfig';

const deviceStore = observable({
  dog : {
    "message": "https://images.dog.ceo/breeds/mastiff-english/4.jpg",
    "status": "success"
  },
  
  async getdog() {
    const result = await httpService.get({
      url:`${apiConfig.baseUrl}`
    }).then((res) => {
      console.log(res);
      this.dog = res
    }) 
  }
})

export default deviceStore