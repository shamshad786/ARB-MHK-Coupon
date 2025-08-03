const { default: axios } = require("axios")

exports.sendPDFoNWhatssapp = async(fileName, baseFile,phoneNum)=>{
    try{
        const res = await axios.post('http://marketing.kwiqsoft.com/rest/services/sendSMS/v2/sendtemplate?AUTH_KEY=52bec2f267b99c062ec61cf5dabc3',{
            senderId: '918447588447',
            component:{
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                to: `91${phoneNum}`,
                type: 'template',
                template:{
                    name: 'applicationformsend',
                    language:{
                        code:"en"
                    },
                    components:[
                        {
                            type: 'header',
                            
                            parameters: [
                               {
                                type: "document",
                            document: {
                                mediaFileData: baseFile,
                                filename: fileName
                            }
                               }
                            ]
                        }
                    ]
                }
            }
        })

        return res.data

    }catch(err){
        console.log(err)
    }
}