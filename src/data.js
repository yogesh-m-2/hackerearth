// export const stockData = [
//   {
//     company: "Twitter Inc",
//     ticker: "TWTR",
//     stockPrice: "22.76 USD",
//     timeElapsed: "5 sec ago",
//   },
//   {
//     company: "Square Inc",
//     ticker: "SQ",
//     stockPrice: "45.28 USD",
//     timeElapsed: "10 sec ago",
//   },
//   {
//     company: "Shopify Inc",
//     ticker: "SHOP",
//     stockPrice: "341.79 USD",
//     timeElapsed: "3 sec ago",
//   },
//   {
//     company: "Sunrun Inc",
//     ticker: "RUN",
//     stockPrice: "9.87 USD",
//     timeElapsed: "4 sec ago",
//   },
//   {
//     company: "Adobe Inc",
//     ticker: "ADBE",
//     stockPrice: "300.99 USD",
//     timeElapsed: "10 sec ago",
//   },
//   {
//     company: "HubSpot Inc",
//     ticker: "HUBS",
//     stockPrice: "115.22 USD",
//     timeElapsed: "12 sec ago",
//   },
// ];
export const stockData = fetch('192.168.99.102:8080/api/projects.php', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0VGltZXRyYWNrZXJBcGkiLCJhdWQiOiJUSEVfQVVESUVOQ0UiLCJpYXQiOjE2MDY0NzAxMzMsIm5iZiI6MTYwNjQ3MDEzMywiZXhwIjoxNjA2NDcxOTMzLCJkYXRhIjp7ImZpcnN0bmFtZSI6InRlc3RpbmciLCJpZCI6IjIiLCJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIn19.SlTpTCaF01fx7SNXF9vUjUsLLXVYWqooTCr4MGU-EOg'
  })
});

 export const stockData = fetch('192.168.99.102:8080/api/projects.php')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })




  //.then((result)=>{
  //   result.json().then((resp)=>{
  //     console.warn(resp);
  //   })
  // })
