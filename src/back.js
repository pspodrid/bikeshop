

export function apiCall() {  fetch(`http://bikeindex.org/api/v3/search/count?location=${city}&color=${color}&manufacturer=${manufacturer}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonifiedResponse) {
      getElements(jsonifiedResponse);
    });
}
