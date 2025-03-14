import express from 'express';
import NotificationController from '../controllers/NotiController.js';
import validateSchema from '../middleware/ValidateSchema.js';
import NotiYup from '../utils/Validation/NotiYup.js';

const router = express.Router();

// Route to handle getting a notification by ID
router.post('/getNotification', validateSchema(NotiYup.getNotification) , NotificationController.getNotification);

router.post('/getAllNotificationOfUser',validateSchema(NotiYup.getAllNotificationOfUser),NotificationController.getAllNotificationOfUser)

router.post('/addNotification',validateSchema(NotiYup.createNotificationSchema) ,NotificationController.getNotification);

// Route to handle getting all notifications
router.get('/getNotifications', NotificationController.getAllNotifications);

// Route to handle updating a notification by ID
router.put('/update', validateSchema(NotiYup.updateNotificationSchema) ,NotificationController.updateNotification);

// Route to handle deleting a notification by ID
router.delete('/delete', validateSchema(NotiYup.dltNotification) ,NotificationController.deleteNotification);

router.post("/sendsms", validateSchema(NotiYup.sendSms) ,NotificationController.sendSMS);
router.post("/sendemail", validateSchema(NotiYup.sendEmail) ,NotificationController.sendEmail);
router.post("/sendalert", NotificationController.sendAlert);

router.get('/last/:patientId', NotificationController.getLastNotificationByPatientId);


// Route to send indoor alerting notification
// Route to send outdoor alerting notification
// Route to send fall detection alerting notification
// Route to send sos alerting notification
// Route to send high body temperature alerting notification

export default router;