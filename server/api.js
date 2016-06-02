import express from 'express';
import moment from 'moment';
const router = express.Router();


router.get('/universe', (req, res) => {
  //?clearCache=y
  fetch('http://hrdlim01.fo-currys.fo.dev.dixons.com/api/index.php/ucms').then((response) => {
    return response.json();
  })
  .then((json) => {
    res.json({universeList: json});
  });

});


router.get('/universe/:universeId', (req, res) => {
  const data = {
    universe: {
      id: 0
    }
  };

  res.json(data);
});

router.get('/category/:categoryId', (req, res) => {
  const data = {
    category: {
      id: 0
    }
  };

  res.json(data);
});

router.get('/segment/:segmentId', (req, res) => {
  const data = {
    segment: {
      id: 0
    }
  };

  res.json(data);
});


router.get('/market/:marketId', (req, res) => {
  const data = {
    market: {
      id: 0
    }
  };

  res.json(data);
});

router.get('/product/:productId', (req, res) => {

  fetch('http://hrdlim01.fo-currys.fo.dev.dixons.com/api/index.php/product/'+req.params.productId).then((response) => {
    return response.json();
  })
  .then((json) => {
    res.json({product: json});
  });

});


export default router;
