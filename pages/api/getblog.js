// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {

  await fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return res.status(404).json({error: "No Such blog found"})
      
    }
    return res.status(200).json(data)
    
  })
  
}

export const config = {
  api: {
    externalResolver: true,
  },
}