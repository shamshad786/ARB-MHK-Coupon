const SubscriberModel = require('../model/subscriber.model')
const AppError = require('../utils/appError')

const catchAsync = require("../utils/catchAsync");
const sendEmail = require('../utils/sendMail');

exports.createSubscriber = catchAsync(async (req, res, next) => {
    const {email, coupon} = req.body
    const checkemail = await SubscriberModel.findOne({email})

    if(checkemail)return next(new AppError('You are already subscribe', 400))
    const subscribe = await SubscriberModel.create({email, coupon})

    await sendEmail({
    to: email,
    subject: "🎁 Your Exclusive Arabian Mehek Coupon Code",
    html: `
      <h2>Thank you for subscribing!</h2>
      <p>Here is your coupon code:</p>
      <h1 style="color: green;">${coupon}</h1>
      <p>Use this code on checkout to enjoy your discount.</p>
      <br/>
      <p>— Arabian Mehek Team</p>
    `,
  });

    if(!subscribe) return next(new AppError('Something error try again', 500))
    res.status(201).json({
    status: "success",
    message: "You are subscribe successfully",
    subscribe
  });

})

exports.getAllSubscribers = catchAsync(async (req, res, next) =>{
const allSubscriber = await SubscriberModel.find().lean()
if(!allSubscriber || allSubscriber.length === 0)return next(new AppError('No subscriber found yet', 404))

res.status(200).json({
    status: "success",
    total: allSubscriber.length,
    message: "Subscribers fetch successfully",
    allSubscriber
  });
})