
import React, {Component} from "react";

class Stocks extends Component {

  state={
    name : null
  }

  async componentDidMount() {
  //const url = "https://api.randomuser.me/";
  const url = " https://analyticsreporting.googleapis.com/v4/reports:batchGet";
  var params=
    {
  "reportRequests": [
    {
      "cohortGroup": {},
      "dateRanges": [
        null
      ],
      "dimensionFilterClauses": [
        null
      ],
      "dimensions": [
        null
      ],
      "filtersExpression": "",
      "hideTotals": true,
      "hideValueRanges": true,
      "includeEmptyRows": true,
      "metricFilterClauses": [
        null
      ],
      "metrics": [
        null
      ],
      "orderBys": [
        null
      ],
      "pageSize": 0,
      "pageToken": "",
      "pivots": [
        null
      ],
      "samplingLevel": "SAMPLING_UNSPECIFIED",
      "segments": [
        null
      ],
      "viewId": ""
    }
  ],
  "useResourceQuotas": true
}

  const response = await fetch(url,{
    method : 'POST',
    headers :{
      'Host':'192.168.99.102:8080',
      'Content-Type':'application/json',
      'Content-Length':'3717',
      'Cookie':'tt_PHPSESSID=oevgrk2pvc04ng9fcsk1pcokvl',
      'Accept':'*/*'
    },
    body : params
  })
  const data = await response.json();
  //this.setState({name: data.results[0].name.first})
  console.log(data);
console.log(JSON.stringify(params));
  }

  render(){
    return(
    <h1>{this.state.name}</h1>
    );
  }
}

export default Stocks;
