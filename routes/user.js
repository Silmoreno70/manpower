const express = require('express')
const user = express.Router()
const db = require('../config/database')
const jwt = require('jsonwebtoken')

user.post('/signin', async (req, res, next) => {
    const { name, last_name, email, password } = req.body
    if (name && last_name && email && password) {
        let query = `INSERT INTO user (name, last_name, email, password)`
        query += `VALUES(
    '${name}',
    '${last_name}',
    '${email}',
    '${password}')`

        const rows = await db.query(query)

        if (rows.affectedRows == 1) {
            return res.status(201).json({
                code: 201,
                message: 'Usuario registrado correctamente'
            })
        }
        return res.status(500).json({
            code: 500,
            message: 'Ocurrió un error ☹'
        })
    }
    return res.status(500).json({
        code: 500,
        message: 'Campos incompletos'
    })
})

user.post('/login', async (req, res, next) => {
    const { email, password } = req.body
    const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
    const rows = await db.query(query)

    if (email && password) {
        if (rows.length == 1) {
            const token = jwt.sign({
                user_id: rows[0].user_id,
                email: rows[0].email
            }, 'debugkey')

            res.status(200).json({
                code: 200,
                message: token,
                user: `${rows[0].name}  ${rows[0].last_name}`
            })
        } else {
            res.status(200).json({
                code: 200,
                message: 'Usuario y/o contraseña incorrectos',
                auth: false
            })
        }
    }
    return res.status(500).json({
        code: 500,
        message: 'Campos incompletos'
    })
})

user.get('/', async (req, res, next) => {
    const usr = await db.query("SELECT * FROM user")
    res.status(200).json({
        code: 1,
        message: usr
    })
})

module.exports = user