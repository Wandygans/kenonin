__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
res.sendFile(__path + '/public/tiktok.html')
})

//vendors
router.get('/vendor.bundle.base.js', (req, res) => {
res.sendFile(__path + '/public/vendors/js/vendor.bundle.base.js')
})
router.get('/off-canvas.js', (req, res) => {
res.sendFile(__path + '/public/js/off-canvas.js')
})
router.get('/hoverable-collapse.js', (req, res) => {
res.sendFile(__path + '/public/js/hoverable-collapse.js')
})
router.get('/misc.js', (req, res) => {
res.sendFile(__path + '/public/js/misc.js')
})
router.get('/settings.js', (req, res) => {
res.sendFile(__path + '/public/js/settings.js')
})
router.get('/todolist.js', (req, res) => {
res.sendFile(__path + '/public/js/todolist.js')
})
router.get('/dashboard.js', (req, res) => {
res.sendFile(__path + '/public/js/dashboard.js')
})

router.get('/materialdesignicons.min.css', (req, res) => {
res.sendFile(__path + '/public/vendors/mdi/css/materialdesignicons.min.css')
})
router.get('/vendor.bundle.base.css', (req, res) => {
res.sendFile(__path + '/public/vendors/css/vendor.bundle.base.css')
})
router.get('/flag-icon.min.css', (req, res) => {
res.sendFile(__path + '/public/vendors/flag-icon-css/css/flag-icon.min.css')
})
router.get('/owl.carousel.min.css', (req, res) => {
res.sendFile(__path + '/public/vendors/owl-carousel-2/owl.carousel.min.css')
})
router.get('/owl.theme.default.min.css', (req, res) => {
res.sendFile(__path + '/public/vendors/owl-carousel-2/owl.theme.default.min.css')
})
router.get('/style.css', (req, res) => {
res.sendFile(__path + '/public/css/style.css')
})
router.get('/sweetalert2.min.js', (req, res) => {
res.sendFile(__path + '/public/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.js')
})

module.exports = router
