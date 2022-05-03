const router = require("express").Router();
const stripe = require("stripe")("sk_test_51HJ8aBJ3GPrVzcrg3QF9IWLBKt3FvtAlPpjjyLiAruQDoy4q9LgmAmCRJf5f9ISCA2FELQfepYerAbajYjCRzDk700U3iCD4Th");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "php",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
