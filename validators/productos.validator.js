import { check } from "express-validator";
import productoMiddleware from "../middlewares/productos.middleware.js";

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    check('precio')
        .isNumeric()
        .withMessage('El precio debe ser de valor numérico.')
        .trim(),
    check('stock')
        .isNumeric()
        .withMessage('El precio debe ser de valor numérico.')
        .trim(),
    check('marca')
        .notEmpty()
        .withMessage('La marca es requerida')
        .trim(),
    productoMiddleware
]

// productoUpdateValidator
const productoUpdateValidator = [
    check('id')
        .isMongoId()
        .withMessage('No se envío el identificador válido para actualizar'),
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    check('precio')
        .isNumeric()
        .withMessage('El precio debe ser de valor numérico.')
        .trim(),
    check('stock')
        .isNumeric()
        .withMessage('El precio debe ser de valor numérico.')
        .trim(),
    check('marca')
        .notEmpty()
        .withMessage('La marca es requerida')
        .trim(),
    productoMiddleware
];
// productoReadOneValidator
const productoReadOneValidator = [
    check('id')
        .optional()
        .isMongoId()
        .withMessage('El identificador es de formato incorrecto'),
        productoMiddleware
]

export default {
    productoCreateValidator,
    productoDeleteValidator,
    productoUpdateValidator,
    productoReadOneValidator
}
