import { observable } from 'mobx';
import httpService from '../service/httpService';
import apiConfig from '../service/apiConfig';

const fhirStore = observable({
  authorize : '',
  token: '',
  
  async getMeta() {
    const result = await httpService.get({
      url:`${apiConfig.fhirUrl}/metadata`
    }).then((res) => {  
      this.authorize = res.rest[0].security.extension[0].extension[0].valueUri
      this.token = res.rest[0].security.extension[0].extension[1].valueUri  
    }) 
  }
})

export default fhirStore