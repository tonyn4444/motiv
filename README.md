1. Install dependencies before running development server by running command 'npm install'

2. Start development server by running 'npm start'

3. Used create-react-app CLI to create app, but ran into a lot of trouble setting configuration for
   API requests and couldn't get past the error:

   'Request header field Authorization is not allowed by Access-Control-Allow-Headers in preflight response.'

   I was able to retrieve data from the API using POSTMAN, but configuring server side code to resolve network request error is something I'm not too familiar with using the create-react-app framework. So unfortunately, I wasn't able to retrieve the data and the application looks pretty crappy since that was the whole point of the challenge. But I'll try my best to comment my code and explain my process.


   If I knew I would have come across this issue and had to redo the challenge, I would have started with Express/Node & just serve views using EJS templating before even trying to integrate React.js since I'm more familiar with getting around CORS issues using Node.


APPLICATION: 




