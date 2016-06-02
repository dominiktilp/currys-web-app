import express from 'express';
import moment from 'moment';

import url from 'url';

const router = express.Router();

//const apiBase = "http://safarm02.fo-currys.fo.dev.dixons.com/api/index.php";
const apiBase = "http://hrdlim01.fo-currys.fo.dev.dixons.com/api/index.php";

router.get('/universe', (req, res) => {
  //?clearCache=y
  fetch(apiBase+'/ucms').then((response) => {
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
  fetch(apiBase+'/segment/'+req.params.segmentId).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      return undefined;
    }
  })
  .then((json) => {
    if (json) {
      res.json({product: json});
    }
    res.status(404).send("Not found");
  });
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

  fetch(apiBase+'/product/'+req.params.productId).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      return undefined;
    }
  })
  .then((json) => {
    if (json) {
      res.json({product: json});
    }
    res.status(404).send("Not found");
  });

});


export default router;
