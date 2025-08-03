const axios  = require('axios')


//send user registration
exports.sendEmailAPI = async(fileName)=>{

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Platform</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color:  #816500; ">
    
      <div style="padding: 20px;  text-align: center; ">
        <div style="max-width: 600px; margin: 0 auto;  background-color: white;  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 10px; border-radius: 7px;">
            <img src="https://firebasestorage.googleapis.com/v0/b/bhartiyaaviationservices-3e814.appspot.com/o/logo%2Fandroid-chrome-192x192.png?alt=media&token=2267900e-8049-476a-9f96-dc660e7cc9fb" width="130px" alt="bhartiyaaviationservices">
            <h2 class="head-title fw-bold my-3">Bhartiya Aviation Services</h2>
         
                <div style="background-color: #F7F7F7; padding: 7px; margin-bottom: 10px;">
                    <p style="font-size: 16px; color: gray;"><u>Thank You For Registering With Us, This Is Your Registration Details.</u></p>
                    <p style="font-size: 16px; color: gray;"><em>If you have any questions or need further assistance, please don't hesitate to contact our support team.</em></p>
                    <p style="font-size: 16px; color: gray;"> <em>For Hindi :</em> +91 8447-58-8447 <br><em>For English :</em>  +91 8447-79-8447</p> 
                    <p style="font-size: 16px; color: gray;"><em>Email Us :</em> info@bhartiyaaviation.in</p> 
                </div>
        
             <table style="width: 100%; border-collapse: collapse; background-color: white; border: 1px solid #ddd;">
              <tbody>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Profile</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.profile}</td>
                </tr>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Registration No.</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.regNum}</td>
                </tr>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Name</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.name}</td>
                </tr>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Email</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.email}</td>
                </tr>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Mobile</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.phone}</td>
                </tr>
                <tr>
                  <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Password</th>
                  <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.password}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </body>
    </html>
    `

    try{
        const response = await axios.post('http://marketing.kwiqsoft.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
        // const response = await axios.post('http://msg.icloudsms.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
            routeId: 15,
            fromEmail:'basmail@basbhartiyaaviation.in',
            fromName: 'Bhartiya Aviation Services',
            toEmailSet: [
                {
                email: fileName.email,
                personName: fileName.name
                },
            {
                email: 'bhartiyaaviationservices@gmail.com',
                personName: 'Bhartiya Aviation Services'  
            }
        ],
        contentType:'html',
        subject: 'Your Registration Details Send From Bhartiya Aviation Services',
        mailContent: html

        })

        return response.data

    }catch(err){
        console.log(err)
    }
}


//send forget password/candidate query 

exports.sendCandidateInformation = async(emails, fileName, type)=>{

    let content;

    if(type === 'forgetpassword'){
        content = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Our Platform</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color:  #816500; ">
        
          <div style="padding: 20px;  text-align: center; ">
            <div style="max-width: 600px; margin: 0 auto;  background-color: white;  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 10px; border-radius: 7px;">
                <img src="https://firebasestorage.googleapis.com/v0/b/bhartiyaaviationservices-3e814.appspot.com/o/logo%2Fandroid-chrome-192x192.png?alt=media&token=2267900e-8049-476a-9f96-dc660e7cc9fb" width="130px" alt="bhartiyaaviationservices">
                <h2 class="head-title fw-bold my-3">Bhartiya Aviation Services</h2>
             
                    <div style="background-color: #F7F7F7; padding: 7px; margin-bottom: 10px;">
                        <p style="font-size: 16px; color: gray;"><u>Thank You For Registering With Us, This Is Your Registration Details.</u></p>
                        <p style="font-size: 16px; color: gray;"><em>If you have any questions or need further assistance, please don't hesitate to contact our support team.</em></p>
                        <p style="font-size: 16px; color: gray;"> <em>For Hindi :</em> +91 8447-58-8447 <br><em>For English :</em>  +91 8447-79-8447</p> 
                        <p style="font-size: 16px; color: gray;"><em>Email Us :</em> info@bhartiyaaviation.in</p> 
                    </div>
            
                 <table style="width: 100%; border-collapse: collapse; background-color: white; border: 1px solid #ddd;">
                  <tbody>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Profile</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.profile}</td>
                    </tr>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Registration No.</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.regNum}</td>
                    </tr>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Name</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;">${fileName.name}</td>
                    </tr>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Email</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.email}</td>
                    </tr>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Mobile</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.phone}</td>
                    </tr>
                    <tr>
                      <th style="padding: 15px; text-align: left; color: gray; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-size: 12px;">Password</th>
                      <td style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd; font-size: 12px;" colspan="2">${fileName.password}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </body>
        </html>
        `
    }else if(type === 'queryform'){
        content = fileName
    }


    try{
        const response = await axios.post('http://marketing.kwiqsoft.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
        // const response = await axios.post('http://msg.icloudsms.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
            routeId: 15,
            fromEmail:'basmail@basbhartiyaaviation.in',
            fromName: 'Bhartiya Aviation Services',
            toEmailSet: emails,
            contentType:'html',
            subject: 'Candidate Information Details Send From Bhartiya Aviation Services',
            mailContent: content
        })

        return response.data
    }catch(err){
        console.log(err)
    }
}

exports.sendPDFEmail = async(email, pdffilename, baseconvertedfile, title) =>{
     try{
        const response = await axios.post('http://marketing.kwiqsoft.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
        // const response = await axios.post('http://msg.icloudsms.com/rest/services/sendEmail/email?AUTH_KEY=51affce7a93dd33246b69fda3ed997',{
            routeId: 15,
            fromEmail:'basmail@basbhartiyaaviation.in',
            fromName: 'Bhartiya Aviation Services',
            toEmailSet: [
                {
                email: email,
                personName: 'Bhartiya Aviation Services'
                },
            {
                email: 'bhartiyaaviationservices@gmail.com',
                personName: 'Bhartiya Aviation Services'  
            }
        ],
        contentType:'html',
        subject: 'Application Form, Bhartiya Aviation Services',
        mailContent: title,
        attachmentType: '1',
        attachments: [
            {
                fileType: 'text/plain',
                fileName: pdffilename,
                fileData: baseconvertedfile
            }
        ]
        })

        return response.data

    }catch(err){
        console.log(err)
    }
}



//! send SMS

exports.sendSMSAPI = async(data)=>{
  const {regNum, name, email, phone, password} = data


const msg = `Dear candidate,
Thank you for registering with BAS Bhartiya Aviation Services Pvt. Ltd.
Your registration number is ${regNum} And Password is ${password}.`;

  
  try{
    const res = await axios.get(`http://marketing.kwiqsoft.com/rest/services/sendSMS/sendGroupSms`, {
    params: {
      AUTH_KEY: '3bb27a9f2bafd9361ad9fbd3d6c4a31',
      message: msg,
      senderId: 'BASAIR',
      routeId: 1,
      mobileNos: phone,
      smsContentType: 'english'
    }
  });

    return res.data
  }catch(err){
    console.log(err)
  }
}