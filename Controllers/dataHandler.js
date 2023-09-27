const data=[
    {
        id:1,
        name:"Nawwal",
        email:"abc@xyz.com",
        phone:"1234567890"
    },
    {
        id:2,
        name:"Nawwal",
        email:"abc@xyz.com",
        "phone":1234567890
    },
    {
        id:3,
        status:"UP",
        "code":200
    }
];


function dataPrinter(req,res)
{
    res.status(200);
    // res.send(JSON.stringify(data));  OR
    res.json(data);
}

function dataPrinterById(req,res)
{
    const getId=req.params.id;
    for(let i=0;i<data.length;i++)
    {
        if(data[i].id==getId)
        {
            res.json(data[i]);
            return; // return after sending response
        }
    }
    res.status(404).send('Data not found'); // send a 404 if no data is found
}


module.exports={dataPrinter,dataPrinterById};