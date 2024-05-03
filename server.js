const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { chats } = require('./data/data');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const postsRoutes = require("./routes/postsRoutes")
const commentsRoutes = require('./routes/commentRoutes');
const chatRouter = require('./routes/chatRoutes');
const e = require('express');
dotenv.config();


connectDB();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes )
app.use('/api/chat', chatRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log('Server running on port 5000'));