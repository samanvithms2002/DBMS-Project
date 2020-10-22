const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
	var message = '';
	resp.render('index',{message:message})
})

module.exports = router;