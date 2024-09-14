import React, { useEffect, useState } from 'react';
import './App.css';
import yaml from 'js-yaml';
import BackgroundVideo from './BackgroundVideo';
import Introduction from './Introduction';

interface SpecificTypes {
  entertainment: string;
  hotels: string;
  restaurants: string;
  food: string;
  services: string;
  sights: string;
}

interface ListsUrls {
  general: string;
  liked: SpecificTypes;
  recommended: SpecificTypes;
}

interface Video {
  url: string;
  description: string;
}

interface Country {
  name: string;
  country_code: string;
  videos: Video[];
  lists_urls: ListsUrls;
}

interface CountryData {
  [countryName: string]: Country;
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
        
        console.log("text = ", text);
        console.log("parsed data = ", parsedData);
        
        for (const [countryName, country] of Object.entries(sortedData)) {
          console.log(countryName, country);
        }
        
        setData(sortedData);
      } catch (error) {
        console.error('Error loading YAML:', error);
      }
    };

    fetchData();
  }, []);
  
  return (

    <div>
      
      <BackgroundVideo />
      
      <div className="content">
      
        <h1>My Travel Experiences ✈️</h1>
        
        <Introduction />
          

        
        {data && Object.entries(data).map(([countryName, country]) => (
          <div key={countryName} className={`country-section bg-${country.country_code}`}>
            <h2>{country.name}</h2>

            {/* Videos Section */}
            <h3>Videos</h3>
            <ul>
              {/* Safe check to ensure videos exist before mapping */}
              {country.videos?.length > 0 ? (
                country.videos.map((video, index) => (
                  <li key={index}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      {video.description}
                    </a>
                  </li>
                ))
              ) : (
                <p>No videos available</p>
              )}
            </ul>

            {/* General URL */}
            <h3>General List URL</h3>
            {country.lists_urls?.general ? (
              <p>
                <a href={country.lists_urls.general} target="_blank" rel="noopener noreferrer">
                  General List
                </a>
              </p>
            ) : (
              <p>No general list available</p>
            )}

            {/* Liked Section */}
            <h3>Liked Places</h3>
            <ul>
              <li><a href={country.lists_urls?.liked?.entertainment} target="_blank" rel="noopener noreferrer">Entertainment</a></li>
              <li><a href={country.lists_urls?.liked?.hotels} target="_blank" rel="noopener noreferrer">Hotels</a></li>
              <li><a href={country.lists_urls?.liked?.restaurants} target="_blank" rel="noopener noreferrer">Restaurants</a></li>
              <li><a href={country.lists_urls?.liked?.food} target="_blank" rel="noopener noreferrer">Food</a></li>
              <li><a href={country.lists_urls?.liked?.services} target="_blank" rel="noopener noreferrer">Services</a></li>
              <li><a href={country.lists_urls?.liked?.sights} target="_blank" rel="noopener noreferrer">Sights</a></li>
            </ul>

            {/* Recommended Section */}
            <h3>Recommended Places</h3>
            <ul>
              <li><a href={country.lists_urls?.recommended?.entertainment} target="_blank" rel="noopener noreferrer">Entertainment</a></li>
              <li><a href={country.lists_urls?.recommended?.hotels} target="_blank" rel="noopener noreferrer">Hotels</a></li>
              <li><a href={country.lists_urls?.recommended?.restaurants} target="_blank" rel="noopener noreferrer">Restaurants</a></li>
              <li><a href={country.lists_urls?.recommended?.food} target="_blank" rel="noopener noreferrer">Food</a></li>
              <li><a href={country.lists_urls?.recommended?.services} target="_blank" rel="noopener noreferrer">Services</a></li>
              <li><a href={country.lists_urls?.recommended?.sights} target="_blank" rel="noopener noreferrer">Sights</a></li>
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
