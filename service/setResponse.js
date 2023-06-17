export default function setResponse(err, where, msg, res, returnVal) {   
    console.log(`[${where}]`, err ? err : msg);
    res ? 
       (err ? 
          res.status(500).json({ error: "Database error" }) 
          : res.json(returnVal))
       : null;
 }