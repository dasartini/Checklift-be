import {Router} from 'express'
import { pool } from '../db.js';


const router= Router();

router.get('/users', async (req, res) => {
 const result =  await pool.query('SELECT * FROM users')
 console.log(result)
})

router.get('/users/:id', (req, res) => {
    const {id} = req.params 
    res.send("one user" +id )
    console.log(id);
})

router.post('/users', (req, res) => {
    res.send("creating an user");
})

router.delete('/users/:id', (req, res) => {
    const {id} = req.params

    res.send(`Deleting the user of with the id=${id}`);
    console.log(id)
})

router.put('/users/:id', (req, res) => {
    const {id} = req.params
    res.send("patching user with the id=");
    console.log(id)
})


export default router;