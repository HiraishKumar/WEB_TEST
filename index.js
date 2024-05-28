const express=require('express')
const path = require('path')
const app = express()

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log("HELLO MFs");
        }
    );

app.get("/",(req,res)=>{
    res.sendFile(path.join(WEB_TEST, 'public', 'index.html'))
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://heraishkumar123:Gy7LISrmS3EDtn0z@samplenode.kdfhhnf.mongodb.net/Sample-Node?retryWrites=true&w=majority&appName=SampleNode";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
