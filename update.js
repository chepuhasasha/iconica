const key = process.env.FIGMA_TOKEN
const id = process.env.FILE_ID

const axios = require('axios');
const fs = require('fs')

axios.get(`https://api.figma.com/v1/files/${id}?geometry=paths`, {
  headers: {
    "X-FIGMA-TOKEN": key
  }
})
  .then(res => write(res.data))


function write(data) {
  const newData = data.document.children[0].children
  const result = {}
  newData.forEach(icon => {
    result[icon.name] = {}
    icon.children.forEach(mode => {
      result[icon.name][mode.name] = mode.fillGeometry[0].path
    })
  });
  fs.writeFileSync('./iconica/assets/lib.json', JSON.stringify(result, null, '  '), (err) => {
    console.log(err)
  })
}