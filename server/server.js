const Express = require('express');
const Cors = require('cors');
const App = Express();
const PORT = 6060;

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))

App.post('/solve', async (req, res) => {
  console.log('route was hit')
})

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});