import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();

// crear las rutas
router
  .route("/")
  .get(cafeteriaCtrl.listarProductos)
  .post(cafeteriaCtrl.crearProducto);

router
  .route("/:id")
  .delete(cafeteriaCtrl.eliminarProducto)
  .put(cafeteriaCtrl.editarProducto)
  .get(cafeteriaCtrl.obtenerProducto);


export default router;
