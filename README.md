1. Install dependencies before running development server by running command 'npm install'

2. Start development server by running 'npm start'

3. Used create-react-app CLI to create app, but ran into a lot of trouble setting configuration for
   API requests and couldn't get past the error:

   'Request header field Authorization is not allowed by Access-Control-Allow-Headers in preflight response.'

   I was able to retrieve data from the API using POSTMAN, but configuring server side code to resolve network request error is something I'm not too familiar with using the create-react-app framework. So unfortunately, I wasn't able to retrieve the data and the application looks pretty crappy since that was the whole point of the challenge. But I'll try my best to comment my code and explain my process.


   If I knew I would have come across this issue and had to redo the challenge, I would have started with Express/Node & just serve views using EJS templating before even trying to integrate React.js since I'm more familiar with getting around CORS issues using Node.

====================================================================================
APPLICATION: 

1. ROOT of application 'src/index.js'

This is where I configured the react application to use Redux by adding the necessary reducers, actions, and main app component 'App.js' (state container library to handle data flow through application more easily)

2. 'src/actions/index.js'

- This is where I created an action creator that would have been fired whenever the App component was about to be rendered.

- Was also intended to be wired to a 'SearchBar' component that would be fired whenever someone made a search for a new station.

3. 'src/reducers/weather_reducer.js'

- This is where the fetched weather data was supposed to be retrieved

- The action fetches data from the API and then it flows to the store. The data would then be distributed by the appropriate reducer whenever the state of a component needs to be updated. (reducers return state)

4. 'src/containers' & 'src/components'

- The 'containers' directory holds all components that need to keep track of state (the 'SearchBar' and 'WeatherList' components)

- The 'components' directory holds all basic components. In this case, the only basic component needed was 'Chart.js'. Which would have inherited weather data from it's parent component (WeatherList.js)

====================================================================================

Sorry I didnt end up getting the project to work...I was really excited about the project because I had done something very similar before. My plan was to create something similar to the project I'll link below. Just couldn't properly receive the data from API.

https://github.com/tonyn4444/weather-forecast-project-react-redux







