const enquiryModel = require("../model/enquiry.model");


let enquiryInsert = (req,res)=>{
    let {name,email,phone,message} = req.body;
    let enquiry = new enquiryModel ({
        name,
        email,
        phone,
        message
    })
    enquiry.save().then(()=>{
        res.send({status:1, message:"Enquiry saved successfully"});
    }).catch((err)=>{
        res.send({status:0, message:"Error while saving enquiry", error:err});
    })
}

let enquiryList = async (req,res)=>{
    let enquireList = await enquiryModel.find();
    res.send({status:1, data: enquireList})
}
let enquiryDelete = async (req,res)=>{
    let enquiryId = req.params.id;
    let deleteEnquiry = await enquiryModel.deleteOne({_id:enquiryId});
    res.send({status:1, message:"Enquiry deleted successfully", deleteEnquiry});
}
let enquirySingleFind = async (req,res)=>{
    let enquiryId = req.params.id;
    let enquireList = await enquiryModel.find({_id:enquiryId});
    res.send({status:1, enquiry: enquireList})
}
let enquiryUpdate = async (req,res)=>{
    let enquiryId = req.params.id;
    let {name,email,phone,message} = req.body;
    let Obj = {
        name,
        email,
        phone,
        message
    }
    let Update = await enquiryModel.updateOne({_id:enquiryId}, Obj);
    res.send("status:1, message:Enquiry Update successfully", Update);
}

module.exports = {enquiryInsert, enquiryList, enquiryDelete, enquirySingleFind, enquiryUpdate};