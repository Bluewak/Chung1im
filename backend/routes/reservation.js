// routes/reservations.js
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// 예약 목록 가져오기
router.get('/', reservationController.getAllReservations);

// 예약 등록
router.post('/', reservationController.createReservation);

module.exports = router;
