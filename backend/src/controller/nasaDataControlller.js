const Model = require('../model/nasaDataModel')
let axios = require("axios")
let moment = require('moment')
const DEMO_KEY = "oKknhcqStQVHkx7KBEbfAL55r9PjROChbPNdNT86"

let getDATA = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        //geting date from the query param.
        const date = req.query.date

        //getting the present date using moment library
        const now = moment().format("YYYY-MM-DD")

        const dateData = date || now

        //checking in the DATABASE is Data with this date is present or not.
        const dbData = await Model.find({ date: dateData })
        if (dbData.length != 0) {
            return res.status(200).send({ data: dbData })
        }

        //making a axios call by providing the url with API_KEY and date.
        try {

            const axiosData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&date=${dateData}`)

            //storing the necessary data from the axios call in a variable called "data"
            let data = axiosData.data

            //creating the data in our DATABASE that we got from axios call.
            await Model.create(data)

            if (axiosData) {
                // sending the data as respoce that we got from axios call.
                return res.status(200).send({ data: [data] })
            }

        } catch (err) {
            //if any error occurs it will by default get the data from the hardcoded Date for the database.
            if (err.name == 'AxiosError') {
                let defaultD = '2018-02-10'
                const DBData = await Model.find({ date: defaultD })

                return res.status(200).send({ data: DBData })
            }
        }
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}





module.exports.getDATA = getDATA