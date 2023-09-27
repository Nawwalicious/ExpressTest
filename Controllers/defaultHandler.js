function welcome(req,res)
{
    res.status(200);
    res.send("This is Home Page");
}

function doesNotExist(req,res)
{
    res.status(404);
    res.send("!!!This Page Does Not Exist!!!");
}

module.exports={welcome,doesNotExist};