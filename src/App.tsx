import React, { useEffect, useState } from 'react';
import './App.css';
import yaml from 'js-yaml';
import BackgroundVideo from './BackgroundVideo';
import Introduction from './Introduction';
import Country from './Country';
import { Link } from 'react-scroll';
import { CountryData } from './types';

const defaultTiltOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            30,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


function App() {
  
  const [data, setData] = useState<CountryData | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the YAML file from the public folder. However, uses an URL s.t. a HTTP request is made. This way, the file is not bundled with the app and so it doesn't need to be rebuilt when the file changes.
        
        // Used for cache busting, so the file is always fetched from the server (it was being stored in Disk Cache by Chrome)
        let randomNum = Math.round(Math.random() * 10000);
        
        const response = await fetch('https://raw.githubusercontent.com/PedroChaps/GHPages_travel/main/public/country_data.yaml?' + randomNum);
        const text = await response.text();
        
        // Parse the YAML file and cast it to CountryData type
        const parsedData: CountryData = yaml.load(text) as CountryData;
        
        // Sort it
        const entries = Object.entries(parsedData);
        const sortedEntries = entries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        const sortedData = Object.fromEntries(sortedEntries);
        
        // Determines if the country is visited or not
        // A country is visited if at least one of the "liked" keys has a value (i.e., a link)
        for (const [_, country] of Object.entries(sortedData)) {
          country.visited = Object.values(country.lists_urls.liked).some(value => value !== null);
        }
        
        setData(sortedData);
        console.log("Number of countries: ", Object.keys(sortedData).length);
        
      } catch (error) {
        console.error('Error loading YAML:', error);
      }
    };

    fetchData();
  }, []);
  
  return (

    <div id="top">
      
      <BackgroundVideo />
      
      <div className="content">
      
        <h1 id="title">My Travel Lists ✈️</h1>
        
        
        <h2>Table of Countries</h2>
        
        {/* puts a div that is centered but the text within it is left aligned */}
        <div className="table-of-countries flex flex-center max-w-72">
          <ul className="ml-auto mr-auto text-left">
            {data && Object.entries(data).map(([countryName, country]) => (
              // Adds a checkmark if the country is visited
              <li key={countryName}>
                <Link to={`${country.country_code}`} spy={true} smooth={'easeInOutQuad'} className="hover:text-slate-600 hover:underline transition">{country.name}{country.visited ? " ✅" : ""}</Link>
              </li>
            ))}
            {/* Counts the number of countries visited */}
            <br/><li> <b>{data && Object.values(data).filter(country => country.visited).length}/197 countries visited</b></li>
          </ul> 
        </div>
        
        <h2>Introduction</h2>
        <div className="country-section">
          <Introduction />
        </div>

          <h2>Countries</h2>
            
          {/* Creates a country per item in the data file */}
          {data && Object.entries(data).map(([countryName, country]) => (
            <Country countryName={countryName} country={country} defaultTiltOptions={defaultTiltOptions} />
          ))}
        
      </div>
      
          
    </div>
  );
}

export default App;
