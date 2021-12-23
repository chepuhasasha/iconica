const key = process.env.FIGMA_KEY
const id = process.env.FILE_ID

const axios = require('axios');

axios.get(`https://api.figma.com/v1/files/${id}?geometry=paths`, {
  headers: {
    "X-FIGMA-TOKEN": key
  }
})
  .then(res => console.log(JSON.stringify(res.data, null, ' ')))