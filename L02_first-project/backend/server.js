import express from 'express';

const app = express();
const port = process.env.PORT;

// routes
app.get('/', (req, res) => {
    return res.json({ massage: 'Hello world!' })
})
app.get('/api/todos', (req, res) => {
    const data = [
        {
            "id": 1,
            "todo": "Do something nice for someone you care about",
            "completed": false
        },
        {
            "id": 2,
            "todo": "Memorize a poem",
            "completed": true,
        },
        {
            "id": 3,
            "todo": "Watch a classic movie",
            "completed": true,
        },
        {
            "id": 4,
            "todo": "Watch a documentary",
            "completed": false,
        },
        {
            "id": 5,
            "todo": "Invest in cryptocurrency",
            "completed": false,
        }
    ]
    return res.json(data)
})

app.listen(port, () => {
    console.log(`Server is running at "http://localhost:${port}"`)
})