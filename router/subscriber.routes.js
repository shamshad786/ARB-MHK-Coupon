const express = require('express');
const router = express.Router();

const subscriberController = require('../controller/subscriberController')

router.post('/subscribe', subscriberController.createSubscriber)
router.get('/allsubscribe', subscriberController.getAllSubscribers)


module.exports =  router; 