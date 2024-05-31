import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// Each app.use(middleware) is called every time a request is sent to the server.

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// Connect to MongoDB

const db_connection_url = 'mongodb+srv://sudeonder:admin@pages.atf9itg.mongodb.net/?retryWrites=true&w=majority&appName=pages'
const port = process.env.PORT || 8000;

mongoose.connect(db_connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((error) => console.log(error.message));




