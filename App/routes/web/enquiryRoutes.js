let express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleFind, enquiryUpdate } = require('../../controlers/controlers');
let enquiryRoutes = express.Router();

enquiryRoutes.post('/insert', enquiryInsert);
enquiryRoutes.get('/view', enquiryList);
enquiryRoutes.delete('/delete/:id', enquiryDelete);
enquiryRoutes.get('/single/:id', enquirySingleFind);
enquiryRoutes.put('/update/:id', enquiryUpdate);

module.exports = enquiryRoutes;