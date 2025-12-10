let express = require('express');
let mongoose = require('mongoose');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let cors = require('cors');
let app = express();
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/website/enquiry',enquiryRoutes);


//Connect to mongobd
mongoose.connect(process.env.dbURL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.port, () =>{
        console.log('Server is running');
    });
}).catch((error)=>{
    console.log(error);
});