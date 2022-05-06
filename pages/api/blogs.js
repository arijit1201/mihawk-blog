// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import * as path from 'path';
export default async function handler(req, res) {

  const blogRepo = "blogdata"
  let data = await fs.promises.readdir(blogRepo);
  data = data.slice(0, parseInt(req.query.count))
  
  let allBlogs = []
  //using for...of pattern of javascript to use await inside
  // for(const element of data) {
  for(let index=0; index < data.length; index++) {
    const item = data[index]
    let theFile = await fs.promises.readFile(path.join(blogRepo,item), 'utf-8');
    allBlogs.push(JSON.parse(theFile))

  }
    return res.status(200).json(allBlogs)
 
  
  
}

// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile()
// }



export const config = {
  api: {
    externalResolver: true,
  },
}