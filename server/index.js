const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({message: 'yo'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Server is listening on port ${PORT}`);
});