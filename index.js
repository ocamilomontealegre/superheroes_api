import app from './app.js';

const port = 3000;

// listen server
app.listen(port, () => {
  console.log(`Server listening on https://localhost:${port}`);
});