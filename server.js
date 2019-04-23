const express = require('express');
const app = express();
const port = 3267;

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'damon',
      lastName: 'wu'
    },
    {
      id: 2,
      firstName: 'ella',
      lastName: 'wu'
    },
    {
      id: 3,
      firstName: 'sophie',
      lastName: 'gao'
    }
  ];
  res.json(customers);
});

app.listen(port, () =>
  console.log(`Server is up with port ${port}..`));