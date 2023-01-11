// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 
// location api
//http://ip-api.com/json

//services api
//

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation',
//   params: {query: '<REQUIRED>'},
//   headers: {
//     'X-RapidAPI-Key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
//     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
