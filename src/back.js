export class BikeService {
  async apiCall(city,color,manufacturer) {
    try {
    let response = await fetch(`http://bikeindex.org/api/v3/search/count?distance=${city}&color=${color}&manufacturer=${manufacturer}`);
    let jsonifiedResponse = await response.json();
    console.log(jsonifiedResponse);
    return jsonifiedResponse;
  } catch(error) {
    console.error("There was an error handling your request" + error.message)
  }
}
}
