## Weather App
### Prerequisites

* Clone or download the repo
* Node.js

### Install Node.js and Node Package Manager

Install [nvm](https://github.com/creationix/nvm).

Run the script to install the latest stable Node.js version

#### `nvm install node`

### Adding Variables to your Environment
Get API key from [openweathermap](https://openweathermap.org/appid). 

Create a `.env` file in the root of your project and assign API key to a variable (REACT\_APP\_*=VALUE)

REACT\_APP\_API\_KEY=value

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
 
### Magic Hat (Features)

- Get weather data for the current position of the user [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- Get wind, temperature, clouds data
- Return weather data for the {N} number of days


### Code Improvements
- Validating props - [prop-types](https://github.com/facebook/prop-types) or Typescript
- send req every 10 min to get updates and re-render the weather component
- [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) - import variables, mixins into every scss file
- UX/UI - tooltips for btns, growl messages for error network status
- unit testing

### Stack
* Node.js
* React
* SASS
* Application deployment: Heroku

### Helper
* [Single Element CSS Spinners](https://projects.lukehaas.me/css-loaders/)

### Live Preview
[cool-react-weather-app.herokuapp.com](https://cool-react-weather-app.herokuapp.com/)

_App is running on free dyno. You might wait for a couple of seconds to load the app on Heroku._
