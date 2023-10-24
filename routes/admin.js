const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const isAuth = require("../validations/is-Auth");

/******************************************/
//        DASHBOARD STATES                //
/******************************************/
router.get("/get/stats", isAuth.adminIsAuth, adminController.getStats);

// Extras
// router.post(
//   "/create/extra",
//   isAuth.adminIsAuth,
//   adminController.postCreateExtra
// );

// router.get("/all/extras", isAuth.adminIsAuth, adminController.getAllExtras);

// router.get("/extra", isAuth.adminIsAuth, adminController.getExtra);

// router.put("/update/extra", isAuth.adminIsAuth, adminController.putUpdateExtra);

// router.delete("/delete/extra", isAuth.adminIsAuth, adminController.deleteExtra);

/******************************************/
//                  MEALS                 //
/******************************************/
router.post("/create/meal", isAuth.adminIsAuth, adminController.postAddMeal);

router.get("/get/meals", isAuth.adminIsAuth, adminController.getMeals);

router.get("/get/all/meals", isAuth.adminIsAuth, adminController.getAllMeals);

router.get(
  "/get/meals/type",
  isAuth.adminIsAuth,
  adminController.getMealsByType
);

router.get("/get/meal", isAuth.adminIsAuth, adminController.getMeal);

router.put("/edit/meal", isAuth.adminIsAuth, adminController.postEditMeal);

router.delete("/delete/meal", isAuth.adminIsAuth, adminController.deleteMeal);

/******************************************/
//                 BUNDLES                //
/******************************************/
router.post(
  "/create/bundle",
  isAuth.adminIsAuth,
  adminController.postCreateBundle
);

router.get("/get/bundles", isAuth.adminIsAuth, adminController.getBundles);

router.get("/get/bundle", isAuth.adminIsAuth, adminController.getBundle);

router.put("/edit/bundle", isAuth.adminIsAuth, adminController.putEditBundle);

router.delete(
  "/delete/bundle",
  isAuth.adminIsAuth,
  adminController.deleteBundle
);

router.delete(
  "/delete/menu/meal",
  isAuth.adminIsAuth,
  adminController.deleteMenuMeal
);

router.get("/bundle/menu", isAuth.adminIsAuth, adminController.getMenuMeals);

/******************************************/
//                  USERS                 //
/******************************************/
router.post(
  "/create/employee",
  isAuth.adminIsAuth,
  adminController.postCreateUser
);

router.get("/get/user", isAuth.adminIsAuth, adminController.getUser);

router.get("/get/all/users", isAuth.adminIsAuth, adminController.getAllusers);

router.put("/edit/user", isAuth.adminIsAuth, adminController.editUser);

router.put(
  "/set/user/active",
  isAuth.adminIsAuth,
  adminController.putUserActive
);

router.delete("/delete/user", isAuth.adminIsAuth, adminController.deleteUser);

/******************************************/
//               SETTINGS                 //
/******************************************/
router.get("/get/settings", isAuth.adminIsAuth, adminController.getSettings);

router.post(
  "/set/settings",
  isAuth.adminIsAuth,
  adminController.postSetSettings
);

/******************************************/
//             MENU SETTINGS              //
/******************************************/
router.post(
  "/add/chiff/menu",
  isAuth.adminIsAuth,
  adminController.addChiffMenuDay
);

/******************************************/
//                CLIENTS                 //
/******************************************/
router.delete(
  "/admin/remove/client",
  isAuth.adminIsAuth,
  adminController.deleteSubscriper
);

router.post(
  "/admin/create/client",
  isAuth.adminIsAuth,
  adminController.postAddNewClient
);

router.get("/find/client", isAuth.adminIsAuth, adminController.getFindClient);

router.put(
  "/add/client/name",
  isAuth.adminIsAuth,
  adminController.postAddClientName
);

router.get("/all/clients", isAuth.adminIsAuth, adminController.getAllClients);

router.get("/get/client", isAuth.adminIsAuth, adminController.getClient);

router.post(
  "/client/pause",
  isAuth.adminIsAuth,
  adminController.postPauseClient
);

router.put(
  "/activate/client",
  isAuth.adminIsAuth,
  adminController.postActivateClient
);

router.put(
  "/edit/client/meal",
  isAuth.adminIsAuth,
  adminController.putEditClientMeal
);

router.get(
  "/client/details",
  isAuth.adminIsAuth,
  adminController.getClientPlanDetails
);

/******************************************/
//                REPORTS                 //
/******************************************/
router.get(
  "/today/delivery/meals",
  isAuth.adminIsAuth,
  adminController.getMealsToDeliver
);

router.put(
  "/set/meal/delivered",
  isAuth.adminIsAuth,
  adminController.putMealDelivered
);

router.get(
  "/print/labels",
  isAuth.adminIsAuth,
  adminController.getPrintMealsLabels
);

router.post(
  "/print/meals/labels",
  isAuth.adminIsAuth,
  adminController.getPrintMealsLabels
);

router.post(
  "/admin/deliver/dayMeal",
  isAuth.adminIsAuth,
  adminController.postDeliverDayMeals
);

router.get("/report", isAuth.adminIsAuth, adminController.getReport);

router.get(
  "/admin/inactive/clients",
  isAuth.adminIsAuth,
  adminController.getInactiveClients
);

router.get(
  "/print/client/contract",
  isAuth.adminIsAuth,
  adminController.getClientContract
);

router.put("/set/all/meals/delivered", adminController.putDeliverAllMeals);

// router.get(
//   "/active/clients",
//   isAuth.adminIsAuth,
//   adminController.getKitchenMealsReport
// );

// router.get("/active/clients", adminController.getPaymentsHistory);

/******************************************/
//                  BOXS                  //
/******************************************/

router.post("/create/box", isAuth.adminIsAuth, adminController.postCreateBox);

router.get("/boxes", isAuth.adminIsAuth, adminController.getBoxes);

router.get("/box", isAuth.adminIsAuth, adminController.getBox);

router.put("/edit/box", isAuth.adminIsAuth, adminController.editBox);

router.delete("/delete/box", isAuth.adminIsAuth, adminController.deleteBox);

module.exports = router;
