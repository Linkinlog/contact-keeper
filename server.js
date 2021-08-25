const express = require('express')
const app = express();
const port = process.env.port || 3001;
const connectDB = require('./config/db')


app.use(express.json({extended: false}))

// Connect to db
connectDB();

app.get('/', (req, res) => {
    res.json({msg: 'Meowdy!'});
});

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.listen(port, () => {
    console.log(`listening on ${port}`);
});