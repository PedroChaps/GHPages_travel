# My Travel Lists

## Introduction

I started creating Google Maps lists, organized in different types and states, but it would be inefficient to copy and share every single one of them every time a friend asked for recommendations.

Therefore, I've created this page, which acts as a centralized source of my Google Maps lists.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running it yourself

If you liked the idea, you can copy it for yourself! :D

### Technologies used

- React
- Tailwind (for some of the styling. Started with CSS but felt I was using too much time, so jumped to Tailwind)
- HTML and CSS
- Some cool packages (e.g., `react-tilt` and `js-yaml`)

### Requirements

- Follow this [react-gh-pages guide](https://github.com/gitname/react-gh-pages) to install the requirements and bootstrap yourself

### Usage 

In the project directory, you can then run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits and you can see any lint errors in the console.

#### `npm run deploy`

Deploys the application to the associated GitHub repository.
Please read the react-gh-pages guide linked before for more details on how it works!

### Repo Explanation

The repo structure is as follows:
```
.
├── package.json
├── package-lock.json
├── public
│   ├── CNAME
│   ├── country_data.yaml
│   ├── favicon.ico
│   ├── icons
│   │   ├── ...
│   │   ...
│   ├── index.html
│   ├── ...
|   ...
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── BackgroundVideo.css
│   ├── BackgroundVideo.tsx
│   ├── Introduction.tsx
│   ├── Country.tsx
│   ├── react-app-env.d.ts
│   ├── ToC.tsx
│   └── types.tsx
├── tailwind.config.js
└── tsconfig.json

```

The relevant files are:
- `public/`: general data that is not really source code and that should/can be public (assuming the rest of the repo is private)
  - `CNAME`: the url of the website, because of GitHub Pages
  - `country_data.yaml`: contains all the information per country, including the Google Maps lists' links and potential videos that each country can have
- `src/`: the source code
  - `App.tsx` and `App.css`: Where the main content is (as if this was the `main()` function of a program) and related CSS
  - `index.tsx` and `index.css`: The entrypoint of the app (as if this was [the `_start()` function](https://embeddedartistry.com/blog/2019/04/08/a-general-overview-of-what-happens-before-main/) of a program) and related CSS
  - `BackgroundVideo.tsx` and `BackgroundVideo.css`: self-explanatory. The video that appears in the background.
  - `ToC.tsx`: A Table of ~~Contents~~ Countries.
  - `Introduction.tsx`: Explains the website
  - `Country.tsx`: Represents a section of a country. Includes all the links to Google Maps lists and potential videos of the countries.

The flow of the application is as follows:
1. There is the `public/country_data.yaml` file, where all the data about the countries exist
2. When the page is loaded, the `country_data.yaml` file is fetched from the repo (i.e., an HTTP request is made to the repo; the file that comes bundled with the app is **not** used) and its content is parsed. It was done this way s.t. adding a new list doesn't enforce a redeployment.
3. The data from the file populates multiple sections of the page,w which is then presented to the user.

### Adding data

#### New list

If adding a list to an already existing country, 
1. Export the list link in Google Maps
2. Add the link to the appropriate key in `country_data.yaml`
3. Push the changes (no need to redeploying)

#### New country

If adding a new country, some extra work is needed.
1. Visit the `country_data.yaml` and copy+paste the template available on the end of the file
2. Add the Google Maps links that you have for the new country to the appropriate keys
3. Open the `App.css` file and add a new entry for the background of the section (e.g., `.bg-NO`)
4. Find an appropriate icon for the country's general list and place it under `public/icons/generalLists` (used icon sources under [Credits](#Credits))
5. Push the changes and deploy the application.

## Contributing

If you want to contribute with places you recommend, drop me a message or create an issue in this repo and I'll add them to the lists!

## Credits

- The [freepik](https://www.freepik.com/) website was used for the icons.
  - Some of the [Kawaii icons](https://www.freepik.com/author/freepik/icons/kawaii-lineal-color_47?query=portugal)
  - Some of the [flags](https://www.freepik.com/author/vitaly-gorbachev/icons/vitaliy-gorbachev-lineal-color_571?query=czechia)

## Learn More

Check my [website repo](https://github.com/PedroChaps/pedrochaps.github.io) for a thorough guide on how I learned React and some of the technologies used here.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


<!-- TODO: add margin on the end -->
<!-- TODO: blur changes when zooming in/out -->  
