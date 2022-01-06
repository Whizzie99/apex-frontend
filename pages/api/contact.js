// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default async function(req, res) {
  const {name, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
      user: process.env.USER,
      pass: process.env.PASSWORD
    }
  })

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     type: "OAUTH2",
  //     user: process.env.EMAIL,
  //     pass: process.env.WORD,
  //     clientId: process.env.OAUTH_CLIENTID,
  //     clientSecret: process.env.OAUTH_CLIENT_SECRET,
  //     refreshToken: process.env.OAUTH_REFRESH_TOKEN
  //   }
  // })

  try{
    const emailResponse = await transporter.sendMail({
      from: email,
      to: 'wisdomobiomadev@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>${name}</strong></p>
      <p><strong>${email}</strong></p><br>
      <p><strong>${message}</strong></p>
      `
    })
    console.log('message sent');
  }catch(err){
    console.log(err)
  }

  console.log(req.body);
  res.status(200).json(req.body);
}
