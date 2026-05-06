import express from 'express';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { validateAddToCart, validateDecrementCartItemQuantity, validateIncrementCartItemQuantity } from '../validator/cart.validator.js';
import { addToCart, createOrderController, decrementCartItemQuantity, getCart, incrementCartItemQuantity, verifyOrderController } from '../controllers/cart.controller.js';


const router = express.Router();


/**
 * @route POST /api/cart/add/:productId/:variantId
 * @desc Add item to cart
 * @access Private
 * @argument productId - ID of the product to add
 * @argument variantId - ID of the variant to add
 * @argument quantity - Quantity of the item to add (optional, default: 1)
 */
router.post("/add/:productId/:variantId", authenticateUser, validateAddToCart, addToCart)



/**
 * @route GET /api/cart
 * @desc Get user's cart
 * @access Private
 */
router.get('/', authenticateUser, getCart)


/**
 * @route PATCH /api/cart/quantity/increment/:productId/:variantId
 * @desc Increment item quantity in cart by one
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the variant to update
 */
router.patch("/quantity/increment/:productId/:variantId", authenticateUser, validateIncrementCartItemQuantity, incrementCartItemQuantity)

/**
 * @route PATCH /api/cart/quantity/decrement/:productId/:variantId
 * @desc Decrement item quantity in cart by one. Removes item if quantity reaches 0.
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the variant to update
 */
router.patch("/quantity/decrement/:productId/:variantId", authenticateUser, validateDecrementCartItemQuantity, decrementCartItemQuantity)

/**
 * @route POST /api/cart/payment/create/order
 * @desc Create a Razorpay order for the items in the cart
 * @access Private
 * @argument amount - Total amount for the order (in smallest currency unit, e.g. paise for INR)    
 * @argument currency - Currency code (e.g. INR)
 */
router.post("/payment/create/order", authenticateUser, createOrderController)

/**
 * @route POST /api/cart/payment/verify/order
 * @desc Verify order payment and update order status
 * @access Private
 * @argument razorpay_order_id - Razorpay order ID
 * @argument razorpay_payment_id - Razorpay payment ID
 * @argument razorpay_signature - Razorpay signature for verification
 */
router.post("/payment/verify/order", authenticateUser, verifyOrderController)


export default router;