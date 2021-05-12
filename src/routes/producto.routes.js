import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();

// crear las rutas
router
  .route("/")
  .get(cafeteriaCtrl.getPrueba)
  .post(cafeteriaCtrl.crearProducto);

export default router;
