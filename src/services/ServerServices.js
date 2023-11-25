import axios from "axios"
const ServerURL="http://localhost:5000";


const getData= async(url) => {

     
try{     
var response = await axios.get(`${ServerURL}/${url}`);

var result = await response.data;
return result;
}
catch(e){
    return null;
}
}


const postData = async (url, body) => {
    try {
      var response = await axios.post(`${ServerURL}/${url}`, body, {
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods':' POST'
        },
      });
  
      var result = await response.data;
      return result;
    } catch (e) {
      return null;
    }
  };
  

export {ServerURL,getData,postData};