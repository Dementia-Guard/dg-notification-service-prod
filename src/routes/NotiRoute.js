import express from 'express';
import NotificationController from '../controllers/NotiController.js';
import validateSchema from '../middleware/ValidateSchema.js';
import NotiYup from '../Utils/Validation/NotiYup.js';

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

export default router;