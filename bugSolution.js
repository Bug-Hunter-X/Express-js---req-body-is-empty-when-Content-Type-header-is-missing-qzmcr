const express = require('express');
const app = express();
app.use(express.json({ type: '*/*' })); // Accept any Content-Type
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('OK');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});