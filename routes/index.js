import express from 'express';
const router = express.Router();

import {
    getAllOptions 
} from '../models/index.js'

// GET
router.get('/', async function(req, res) {
    // getAllOptions
    const result = await getAllOptions();
    console.log(`getAllOptions`);
    res.json({ success: true, payload: result });
})

// get all options

// get all pros/cons

// get all previous results

// POST

// post a new option
// post a new pro/con

export default router;