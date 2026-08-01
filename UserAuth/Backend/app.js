const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB Db . 1 LocalDb - 27017 or cloud Address
mongoose.connect('mongodb://localhost:27017/SkillFlowUserAuth')

.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})

//Schema - Blueprnt of The data which we want to store in the database
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// Model - Represents the collection in the database
const User = mongoose.model('User', userSchema)


// -------------Database code ennded-------------

//Api Endpoints

// Register User
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;


    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    //Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
}
);

// Login User
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    //Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'User Not found' });
    }

    //Verify the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
});

//Start the server
app.listen(3000, () => {    
    console.log('Server is running on port 3000 http://localhost:3000');
})