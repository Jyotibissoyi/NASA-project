const Model = require('../model/nasaDataModel')
let axios = require("axios")
let moment = require('moment')
const DEMO_KEY = "oKknhcqStQVHkx7KBEbfAL55r9PjROChbPNdNT86"




let getDATA = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        const query = req.query.date
        const  today=moment().format("YYYY-MM-DD")
        const date= query||today
        const fetch = await Model.find({ date: date})
        if (fetch.length != 0) {
          return  res.status(200).send({ data: fetch })
        } else {
            let axiosData = {
                method: 'get',
                url: `https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&date=${date}`
            }
            let result = await axios(axiosData);
            // if(result.length==0){
            //     const dt= 2023-01-28
            //     const getdata = await Model.find({ date:dt}) 
            //     res.send({data:getdata})
            // }

            let data = result.data
            await Model.create(data)
            return res.status(200).send({ data:[ data] })
        }
    }
    catch (err) {
       return res.status(500).send({ msg: err.message })
    }
}





module.exports.getDATA = getDATA