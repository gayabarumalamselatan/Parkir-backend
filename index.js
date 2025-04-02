const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./src/Routes/authRouter');
const menuRoutes = require('./src/Routes/menuRouter');
const memberRoutes = require('./src/Routes/memberRouter')

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use('/auth-service', userRoutes);
app.use('/menu-service', menuRoutes);
app.use('/member-service', memberRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})