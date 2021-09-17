const express = require('express')
const app = express();
const config = require('config')
const port = config.get('port');
const connectDB = require('./config/db')
const path = require('path')


app.use(express.json({extended: false}))

// Connect to db
connectDB();

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

app.listen(port, () => {
    console.log(`listening on ${port}`);
});