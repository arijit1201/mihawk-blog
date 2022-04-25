// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {

  const blogRepo = "blogdata"

  // fs.readdirSync(folderPath).map(fileName => {
  //   return path.join(folderPath, fileName)
  // })
  // .filter(isFile)

  await fs.readdir("blogdata", 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: "Internal Server Error"})
      
    }
    return res.status(200).json(data)
    
  })
  
}

// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile()
// }



export const config = {
  api: {
    externalResolver: true,
  },
}