

const res = require("express/lib/response");
const nodemailer = require("nodemailer");
const root = require("../root");

//* gmail
// var transport = nodemailer.createTransport({
// //   name: "",
// host: "smtp.gmail.com",
// port: 465,
// secure: true,
// auth: {
//   user: "notify.bhartiyaaviationservices@gmail.com",
//   pass: "tqtesspojmncqqwy",
// },
// });

//?send grid
var transport = nodemailer.createTransport({
  //   name: "",
  host: "smtp.sendgrid.net",
  port: 465,
 secure: true,
  auth: {
    user: "apikey",
    pass: "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",
  },
  });


exports.sendMail = async (email,fileName,invoiceMsg,emailType) => {

  console.log('file name',fileName)

  return new Promise ((resolve,reject)=>{

    console.log("in email");

    if(emailType==0){
      
    var  mailOption = {
      from: "noreply@basbhartiyaaviation.com", //need to change verified signature email if using sendgrid
      to: email,
      subject: "Candidate Application Form",
      text: invoiceMsg,
      // html: data,
      attachments: [
        {
          fileName: "/website_as_pdf.pdf",
          path: fileName,
          contentType: "application/pdf",
        },
      ],
    };
  }
  if(emailType==1){
      var mailOption = {
          from: "noreply@basbhartiyaaviation.com", //need to change verified signature email if using sendgrid
          to: email,
          subject: "Candidate information",
          text: fileName,
          // html: data,
        };
  }
  
    transport.sendMail(mailOption, (err, info) => {
      console.log("in mail send");

      if(err){
        console.log(err)
        reject(err)
      }
      else{
        console.log(info);
        resolve("true")
      }
     
    });
  
    // console.log('this is pdf file link',fileName)
  })
  
};






//email: niaaviationservices@gmail.com
// gmail app password: xgbszvwzwmsvytyq