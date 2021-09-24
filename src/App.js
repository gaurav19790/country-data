import React,{ useEffect,useState } from 'react';
import './App.css';

//
function App() {
  const Base_url="https://restcountries.com/v2/continent/asia";
 const [current,setCurrent]=useState([]);
const Data_API=async ()=>{
  const Api= await fetch(Base_url);
  const ApiData= await Api.json();
  setCurrent(ApiData);
 //console.log(ApiData[0].name);
 //console.log(ApiData[0].capital);
 //console.log(ApiData[0].flags);
 //console.log(ApiData[0].region);
 //console.log(ApiData[0].population);
 //console.log(ApiData[0].borders.join(', '));
 console.log(ApiData[0].languages);
}
//● Display following attributes - name, capital, flag(display image for each country),
// region,subregion, population, borders & languages.
const referPage=()=>{
  window.location.reload(false);
}
useEffect(() => {
   Data_API()
  },[]);
  return (
    <div className="App">
    <div className="nav"><h1>All Asian countries</h1>
    <button onClick={referPage} >Refer</button>
    </div>
    
   {current.map((cur,ind)=>{
    return <div className="map" key={ind}>
        <img src={cur.flags[1] }alt="img" />
        <div className="flex"><h1>{cur.name}</h1>
       <p><span>capital: </span> {cur.capital}</p>
       <p><span>population: </span> {cur.population}</p>
       <p><span>Region: </span>{cur.region}</p>
       <p><span>Languages: </span> {cur.languages[0].name }</p>
        <p ><span>Borders: </span>{cur.borders + ", " }</p>
         </div>
     </div>
   })}
    </div>
  );
}

export default App;
