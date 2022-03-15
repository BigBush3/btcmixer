const Router = require("express");
const router = new Router();
const controller = require("./authController");
const tokenController = require("./tokenController");
const transactionController = require("./transactionController");
const { check } = require("express-validator");
const authMiddleware = require("./middlewaree/authMiddleware");
const roleMiddleware = require("./middlewaree/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware("USER"), controller.getUsers);
router.post("/users", roleMiddleware("USER"), controller.deleteUsers);
router.get("/tokens", roleMiddleware("USER"), tokenController.getTokens);
router.post("/tokens", roleMiddleware("USER"), tokenController.addToken);
router.post("/token", roleMiddleware("USER"), tokenController.deleteToken);
router.get(
  "/transactions",
  roleMiddleware("USER"),
  transactionController.getTransactions
);
router.post("/transaction", transactionController.addTransaction);
router.post(
  "/transactions",
  roleMiddleware("USER"),
  transactionController.deleteTransaction
);
router.put(
  "/transaction",
  roleMiddleware("USER"),
  transactionController.changeStatusTransaction
);
router.post("/address", roleMiddleware("USER"), tokenController.addAddress);
router.get("/address", roleMiddleware("USER"), tokenController.getAddress);
router.post(
  "/addressd",
  roleMiddleware("USER"),
  tokenController.deletedAddress
);

module.exports = router;
