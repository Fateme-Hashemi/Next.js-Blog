import { MongoClient } from "mongodb";

async function handler(req, res) {
if(req.method === 'POST') {
    const {email, name, message} = req.body;
    if(!email || 
        !email.includes('@') || 
        !name || 
        name.trim() === "" ||
         !message ||
         !message.trim() === ''){
            res.status(422).json({message: 'invalid input.'})
            return;

         }
         const newMessage = {
            email,
            name,
            message
         };
         let client;
         try {
         client = await MongoClient.connect('mongodb+srv://elahe-developer:elahedeveloper@cluster0.0it6uau.mongodb.net/elahe-blog');
         } catch (error) {
            res.status(500).json({message: 'could not connect to database.'})
            return;
         }
         const db = client.db();
     try {
        const result= await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
     }catch (error) {
        client.close();
        res.status(500).json({message:'storing message failed' })
        return;
     }
     client.close();

         res.status(201).json({message: "Successfully stored message!", message: newMessage})

}
}

export default handler;