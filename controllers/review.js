const Userreview = require('../models/review');
//add-review
exports.addReview = async (req,res,next)=>{
    try {
        console.log('path is called', req.body);
        const Companyname = req.body.name;
        const pros = req.body.pros;
        const cons = req.body.cons;
        const Index = req.body.ratingIndex;
        console.log("post request");
        const data = await Userreview.create({Companyname: Companyname, pros: pros, cons: cons, ratingIndex: Index})
        res.sendStatus(201)

    } catch (error) {
            res.status(500).json({
            error: error
        })
    }
}
exports.getReviews = async (req,res,next)=>{
    try {
        //console.log("succeded at getting users")
        const allreviews = await Userreview.findAll();
        res.status(200).json({reviewdetails: allreviews})
    } catch (error) {
        console.log("error at getting users")
        res.status(500).json({error: error})   
    } 
}

//get-reviews