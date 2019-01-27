const appKey = '58611129-2dbc-4a81-a72f-77ddfc1b1b49'

function runTestFunction() {
  // if (searchInput.value === "") {
  //
  // }else {
    let searchLink = "https://ghibliapi.herokuapp.com/films/" + appKey
   httpRequestAsync(searchLink, theResponse)
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response)
  title.innerHTML = jsonObject.title
  // icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png"
  description.innerHTML = jsonObject.description
  director.innerHTML = jsonObject.director
}

function httpRequestAsync(url, callback)
{
  console.log("hello")
    var httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText)
    }
    httpRequest.open("GET", url, true) // true for asynchronous
    httpRequest.send()
}
