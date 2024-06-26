
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

//ROUTES
router.post('/createAppointment', auth, appointmentController.createAppointment)
router.put('/update/:id', auth, appointmentController.updateAppointment)
router.delete('/delete/:id', auth, appointmentController.deleteAppointment)
router.get('/getAppointmentById/:id', auth, appointmentController.getAppointmentById)
router.get('/getHours', auth, appointmentController.getHours)
router.get('/searchAppointments', auth, appointmentController.searchAppointments)

module.exports = router;