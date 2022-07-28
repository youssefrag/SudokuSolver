const Express = require('express');
const Cors = require('cors');
const App = Express();
const PORT = 6060;
const BodyParser = require('body-parser')

require('dotenv').config()

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

App.post('/solve', async (req, res) => {
  console.log(req.body)
})

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});