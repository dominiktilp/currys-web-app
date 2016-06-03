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
    fetch(apiBase+'/universe/'+req.params.universeId).then((response) => {
      return response.json();
    })
    .then((json) => {
      res.json({universe: json});
    });
});

router.get('/category/:categoryId', (req, res) => {
    fetch(apiBase+'/category/'+req.params.categoryId).then((response) => {
      return response.json();
    })
    .then((json) => {
      res.json({category: json});
    });
});

router.get('/segment/:segmentId', (req, res) => {
  fetch(apiBase+'/segment/'+req.params.segmentId).then((data) => {
    if (data.status == 200) {
      return data.json();
    } else {
      return undefined;
    }
  })
  .then((segment) => {
    if (segment) {
      res.json({segment});
    }
    res.status(404).send("Not found");
  });
});

router.get('/segment/:segmentId/products', (req, res) => {
  fetch(apiBase+'/segment/'+req.params.segmentId+'/products').then((data) => {
    if (data.status == 200) {
      return data.json();
    } else {
      return undefined;
    }
  })
  .then((products) => {
    if (products) {
      res.json({products});
    }
    res.status(404).send("Not found");
  });
});


router.get('/market/:marketId', (req, res) => {

    fetch(apiBase+'/market/'+req.params.marketId).then((response) => {
      return response.json();
    })
    .then((json) => {
      res.json({market: json});
    });

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
