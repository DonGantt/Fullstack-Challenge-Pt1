const UserData = require("../models/UserData");
const fs = require("fs")
const csv = require("csv-parser")
const filePath = "./accounts.csv"

module.exports = {
    getUserData: async (req, res) => {
        let allParsedData = []
        try {

            //This converts all phone numbers to the E.164 format. It also takes into consideration that if there isn't a region code (like in the examples), it will automatically assume that it is an american region code and add +1
            const convertPhoneNumber = (phoneNumber) => {
                if(phoneNumber.lastIndexOf("-") === 7){
                    return `+1${phoneNumber.replaceAll("-", "")}`
                }
                return `${phoneNumber.replaceAll("-", "")}`
            }
            const users = await UserData.find().lean();

            res.header("Access-Control-Allow-Origin", "*");

            //If the database is not empty it will render the data from mongo not the csv file
            if(users != 0){
                console.log("reading from mongo")
                return res.json(users)
            } else {
                //This was created for the initial data storage. Once its stored, this is never ran again since we pull the data from MongoDB now
                console.log("storing in mongo")

                //handles the csv file and converts it into JSON
                fs.createReadStream(filePath)
                .on("error",(error) => console.log(error))
                .pipe(csv() )
                .on("data", async (row) => {
                    let parsedData = {}
                    row.phone = convertPhoneNumber(row.phone);
                    for (const key in row) {
                        if(key == Object.keys(row)[0]){
                            parsedData["id"] = row[key]
                        } else {
                            parsedData[key] = row[key]
                        }
                    }
                    //Once that piece of data is parsed, it gets sent to the database. Due to the use of Schema, this is very modular and allows you to run something similar with any database
                    await UserData.create({
                        ...parsedData
                    })
                    allParsedData.push(parsedData)
                })
                .on("end",  () => {
                    return res.json(allParsedData)
                })
            }
        } catch (err) {
            console.log(err);
        }    
    }

}