const express  = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.on('error', (err) => console.log('Redis Client Error', err));

client.set('visits', 0);

app.get('/', async (req,res) => {
    await client.get('visits', async (err,visits) => {
        res.send('Number of visits is ' + visits);
        await client.set('visits', parseInt(visits) + 1);
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081');
})