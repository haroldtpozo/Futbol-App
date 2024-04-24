const express = require('express');
const router = require('./routers/router');
const app = express();

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runnning on port: ${PORT}`);
});
