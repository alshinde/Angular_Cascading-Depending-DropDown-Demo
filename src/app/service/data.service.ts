import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  countryArray=[
    {
      "id":1,
      "name":"India"
    },
    {
      "id":2,
      "name":"America"
    }
  ]


  stateArray=[
    {
      "id":1,
      "name":"Maharastra",
      "cid":1
    },
    {
      "id":2,
      "name":"Goa",
      "cid":1
    },
    {
      "id":3,
      "name":"ABC",
      "cid":2
    },
    {
      "id":4,
      "name":"XYZ",
      "cid":2
    }
  ]


  cityArray=[
    {
      "id":1,
      "name":"Pune",
      "sid":1
    },
    {
      "id":2,
      "name":"Mumbai",
      "sid":1
    },
    {
      "id":3,
      "name":"GGG",
      "sid":2
    },
    {
      "id":4,
      "name":"MMMMM",
      "sid":3
    },
    {
      "id":5,
      "name":"PPPP",
      "sid":4
    }
  ]

  constructor() { }


  getCountry(){
  
    return this.countryArray;

  }

  getstate(cid:number){
    return this.stateArray.filter( data => data.cid==cid );
  }

getcity(sid:number){
  return this.cityArray.filter(data => data.sid==sid);
}
}
