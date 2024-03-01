import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**la ruta Solo se puede acceder si tienes la session activa y si tienes un JWT valido */
const router = Router();

router.get('/', checkJwt ,getItems);

export {router };