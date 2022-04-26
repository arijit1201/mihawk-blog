// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import * as path from 'path';
export default async function handler(req, res) {

  const blogRepo = "blogdata"
  let data = await fs.promises.readdir(blogRepo);
  console.log(data)
  let allBlogs = []
  //using for...of pattern of javascript to use await inside
  for(const element of data) {
    let theFile = await fs.promises.readFile(path.join(blogRepo,element), 'utf-8');
    allBlogs.push(JSON.parse(theFile))

  }
    return res.status(200).json(allBlogs)
 
  // fs.readdirSync(folderPath).map(fileName => {
  //   return path.join(folderPath, fileName)
  // })
  // .filter(isFile)

  // await fs.readdir(blogRepo, 'utf8' , (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return res.status(500).json({error: "Internal Server Error"})
      
  //   }
  //   let blogArray = []
  //   data.forEach(element => {
  //     console.log(element);
      
  //     fs.readFile(path.join(blogRepo,element), 'utf-8', (err, content) => {
  //       if(err)
  //       {
  //         console.log(err);
  //         return res.status(500).json({error: "Internal Server Error"})
  //       }
  //       console.log(content)
  //       await blogArray = blogArray.push(content)
  //       console.log(blogArray)
  //     })
  //   });
  //   return res.status(200).json(blogArray)
    
  // })
  
}

// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile()
// }



export const config = {
  api: {
    externalResolver: true,
  },
}