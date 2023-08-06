import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:<password>@cluster0.znatpls.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch(err) {
        console.log(err);
    }
}

startApp();