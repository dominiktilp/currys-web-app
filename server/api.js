import express from 'express';
import moment from 'moment';
const router = express.Router();


router.get('/universe/:universeId', (req, res) => {
  const date = moment();
  const data = {
    universe: {
      id: 0
    }
  };

  res.json(data);
});

router.get('/category/:categoryId', (req, res) => {
  const date = moment();
  const data = {
    category: {
      id: 0
    }
  };

  res.json(data);
});

export default router;
