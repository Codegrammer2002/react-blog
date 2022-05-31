import express, { application } from "express";
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
require("dotenv").config(); 
const app = express();
app.use(express.static(path.join(__dirname, '/build')))
app.use(bodyParser.json());
// this is the boiler connection function withDB.
const withDB = async (operations, res) => {
    // this is the boiler code that let's us connect to the database and close it after the operation is completed.
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
        // this is function that is awaited for.
        await operations(db);
        // after the operation is successfully completed the client is closed i.e disconnected
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

// getting infor about the article
app.get('/api/articles/:name', async (req, res) => {
    // incorporating withDN functions to get info about the article
    withDB(async (db) => {
        const articleName = req.params.name;
        // calling the monogodb
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    }, res);
})
// upvoting the article
app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
    
        res.status(200).json(updatedArticleInfo);
    }, res);
});
// adding comments to the article
app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                // adding the comments to the comment array with the username and text
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});
// All the api route requests should be caught and passed to our app.
// Allows backend to function properly. Corrects call to the correct routes are passed.
app.get('*' , (req, res)=> {
    res.sendFile(path.join(__dirname + '/buidl/index.html'));

})
app.listen(process.env.PORT ||8000, () => console.log('Listening on port 8000'));

