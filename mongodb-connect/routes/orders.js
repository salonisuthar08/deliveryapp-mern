const express = require('express');
const router = express.Router();

// temporary empty route so server doesn't crash
router.get('/', (req, res) => {
  res.json({ message: 'order route working' });
});

module.exports = router;