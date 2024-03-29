import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connect to MongoDB')
})
.catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Server listening on port 3000!')
});

// app.get('/',(req, res)=>{
//     res.json({
//         message:"it is get api"
//     });
// });

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

//define a middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode: statusCode
    })
})