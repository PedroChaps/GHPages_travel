// Represents a country section within the app.

import { Tilt } from 'react-tilt';
import { CountryData } from './types';

var likeLogo = '/icons/like.png';
var recommendedLogo = '/icons/recommended.png';
var videoLogo = '/icons/video.png';
var generalListsPath = '/icons/generalLists/';
var entertainmentLogo = '/icons/entertainment.png';
var restaurantLogo = '/icons/restaurant.png';
var foodLogo = '/icons/food.png';
var servicesLogo = '/icons/services.png';
var hotelLogo = '/icons/hotel.png';
var sightsLogo = '/icons/sights.png';


interface CountryProps {
    countryName: string;
    country: any;
    defaultTiltOptions: any;
}

// function Country({ countryName, country, defaultTiltOptions }) {
//     return (
const Country: React.FC<CountryProps> = ({ countryName, country, defaultTiltOptions }) => {
    return (
        <div key={countryName} id={country.country_code} className={`country-section bg-${country.country_code}`}>
            <h2 className="font-bold">{country.name}</h2>


            {/* General URL */}
            {country.lists_urls?.general ? (
              <p>
                <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.general} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer"> 
                      <img src={generalListsPath + country.country_code + ".png"} className='h-12'/> 
                      <span>General List</span>
                    </a>
                  </Tilt>
              </p>
            ) : (
              <p>No general list available</p>
            )}

            {/* Liked Section */}
            
            {country.lists_urls?.liked?.entertainment || country.lists_urls?.liked?.hotels || country.lists_urls?.liked?.restaurants || country.lists_urls?.liked?.services || country.lists_urls?.liked?.sights ? (
              <div className='flex justify-center items-center m-6'>
                <img src={likeLogo} className='h-5'/>
                <h3 className='ml-2'>Liked Places</h3>
            </div>
            ) : (
              <></>
            )}
            
            
            <div className='flex justify-center flex-wrap'>
              {
                country.lists_urls?.liked?.entertainment ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.entertainment} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer"> 
                      <img src={entertainmentLogo} className='h-12'/> 
                      <span>Entertainment</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.liked?.hotels ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.hotels} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                      <img src={hotelLogo} className='h-12'/>
                      <span>Hotels</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.liked?.restaurants ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.restaurants} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                      <img src={restaurantLogo} className='h-12'/>
                      <span>Restaurants</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.liked?.food ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.food} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                      <img src={foodLogo} className='h-12'/>
                      <span>Food</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.liked?.services ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.services} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                      <img src={servicesLogo} className='h-12'/>
                      <span>Services</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.liked?.sights ? (
                  <Tilt options={defaultTiltOptions}>
                    <a href={country.lists_urls?.liked?.sights} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                      <img src={sightsLogo} className='h-12'/>
                      <span>Sights</span>
                    </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
            </div>
            
            {/* Recommended Section */}
            
            {country.lists_urls?.recommended?.entertainment || country.lists_urls?.recommended?.hotels || country.lists_urls?.recommended?.restaurants || country.lists_urls?.recommended?.services || country.lists_urls?.recommended?.sights ? (
              <div className='flex justify-center items-center m-6'>
                <img src={recommendedLogo} className='h-8'/>
                <h3 className='ml-2'>Recommended Places</h3>
              </div>
            ) : (
              <></>
            )}
            
            <div className='flex justify-center flex-wrap'>
            {
                country.lists_urls?.recommended?.entertainment ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.entertainment} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer"> 
                    <img src={entertainmentLogo} className='h-12'/> 
                    <span>Entertainment</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.recommended?.hotels ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.hotels} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                    <img src={hotelLogo} className='h-12'/>
                    <span>Hotels</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.recommended?.restaurants ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.restaurants} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                    <img src={restaurantLogo} className='h-12'/>
                    <span>Restaurants</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.recommended?.food ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.food} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                    <img src={foodLogo} className='h-12'/>
                    <span>Food</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.recommended?.services ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.services} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                    <img src={servicesLogo} className='h-12'/>
                    <span>Services</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              {
                country.lists_urls?.recommended?.sights ? (
                  <Tilt options={defaultTiltOptions}>
                  <a href={country.lists_urls?.recommended?.sights} target="_blank" className="ml-2 mr-2 flex flex-col items-center transition duration-300 hover:scale-125 hover:text-slate-600" rel="noopener noreferrer">
                    <img src={sightsLogo} className='h-12'/>
                    <span>Sights</span>
                  </a>
                  </Tilt>
                ) : (
                  <></>
                )
              }
              </div>  
              
            {/* Videos Section */}
            
            {country.videos?.length > 0 ? (
              <div className='flex justify-center items-center m-6'>
              <img src={videoLogo} className='h-8'/>
              <h3 className='ml-2'>Videos</h3>
            </div>
            ) : (
              <></>
            )}
            <ul>
              {/* Safe check to ensure videos exist before mapping */}
              {country.videos?.length > 0 ? (
                console.log("country.videos = ", country.videos),
                country.videos.map((video: any, index: any) => (
                  <div>
                  <p>{video.description}</p>
                    <iframe
                      key={index}
                      className="rounded-lg ml-auto mr-auto w-[270px] h-[150px] md:w-[560px] md:h-[315px]"
                      src={video.url}
                      title={video.description}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
                  </div>
                ))
              ) : (
                <></>
              )}
            </ul>

            {/* Back to top */}
            <br/>
            <a href="#title" className="hover:text-slate-600 underline transition">Back to top</a>
            
          </div>
    )
}

export default Country;