// export interface SpecificTypes {
//     entertainment: string;
//     hotels: string;
//     restaurants: string;
//     food: string;
//     services: string;
//     sights: string;
//   }
  
// export interface ListsUrls {
//     general: string;
//     liked: SpecificTypes;
//     recommended: SpecificTypes;
//   }
  
// export interface Video {
//     url: string;
//     description: string;
//   }
  
// export interface Country {
//     name: string;
//     country_code: string;
//     videos: Video[];
//     lists_urls: ListsUrls;
//   }
  
// export interface CountryData {
//     [countryName: string]: Country;
//   }

export interface CountryData {
    [countryName: string]: {
        name: string;
        country_code: string;
        videos: {
            url: string;
            description: string;
        }[];
        lists_urls: {
            general: string;
            liked: {
                entertainment: string;
                hotels: string;
                restaurants: string;
                food: string;
                services: string;
                sights: string;
            };
            recommended: {
                entertainment: string;
                hotels: string;
                restaurants: string;
                food: string;
                services: string;
                sights: string;
            };
        };
        visited: boolean | null;
    }
}

  