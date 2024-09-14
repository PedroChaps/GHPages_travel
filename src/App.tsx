import React, { useEffect, useState } from 'react';
import './App.css';
import yaml from 'js-yaml';

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
  videos: Video[];
  lists_urls: ListsUrls;
}

interface CountryData {
  [countryCode: string]: Country;
}

function App() {
  
  const [data, setData] = useState<CountryData | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the YAML file from the public folder.
        const response = await fetch('/temp.yaml');
        const text = await response.text();
        
        // Parse the YAML file and cast it to CountryData type
        const parsedData: CountryData = yaml.load(text) as CountryData;
        console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.error('Error loading YAML:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>
    //       {data ? 'Data loaded!' : 'Loading data...'}
    //     </p>
        
    //   </header>
    // </div>
    <div>
      <h1>Travel Information</h1>
      {data && Object.entries(data).map(([countryCode, country]) => (
        <div key={countryCode}>
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
  );
}

export default App;
