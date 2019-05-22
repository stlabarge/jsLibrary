var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/:city/:state/:pricingInfo', function (req, res) {

    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?location=${req.params.city}${req.params.state}&price=${req.params.pricingInfo}`,
        headers: {
            'Authorization': 'Bearer ZNzgLzIbolVgF2TrDXPHbxuB7napsi_A9g-adYLLocrcYVx49_mN_IhQeY7KMjiGyU0bf_FZov1VZhSPtFmXAInbA0lygo_GMHNJUSRk_8T3ledB3TliEUklfjHkXHYx',
            'Content-Type': 'application/json'
        }
    }
    ).then(response => {
        res.send(response.data);
    })
        .catch(error => {
            console.log(error);
        })

});


module.exports = router;