const Express = require('express');
const Cors = require('cors');
const App = Express();
const PORT = 6060;
const BodyParser = require('body-parser')
const axios = require('axios').default

require('dotenv').config()

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

App.post('/solve', (req, res) => {
  console.log(req.body)
  const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'solve-sudoku.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
    data: {
      puzzle: req.body.puzzle
    }
  };

  axios.request(options).then((response) => {
    console.log(response.data)
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })

})

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});