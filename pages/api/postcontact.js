import * as fs from 'fs'
import * as path from 'path';
export default async function handler(req, res) {
    const contactRepo = "contactdata"
    if (req.method === 'POST') {
      // Process a POST request
      let { name, email} = req.body;
      try {
        let contactDataArray = await fs.promises.readdir(contactRepo);
        await fs.writeFileSync(path.join(contactRepo, name+'-'+email+'-'+Date.now()+'-'+(contactDataArray.length+1))+'.json', JSON.stringify(req.body));
        // file written successfully
      } catch (err) {
        console.error(err);
        return res.status(500).json({ "message" : "Internal Server Error"})
      }
      return res.status(200).json(req.body)
    } else {
      // Handle any other HTTP method
      return res.status(200).json({"message" : "Invalid HTTP method"})
    }
  }

  export const config = {
    api: {
      externalResolver: true,
    },
  }