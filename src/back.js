export class BikeService {
  async apiCall(city,color,manufacturer) {
    let response = await fetch(`http://bikeindex.org/api/v3/search/count?distance=${city}&color=${color}&manufacturer=${manufacturer}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }


}
