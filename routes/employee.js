const express = require('express')
const employee = express.Router()
const db = require('../config/database')

employee.post('/', async (req, res, next) => {
    console.log(req.body);
    const { name, last_name, curp, age, job, imss, clabe } = req.body

    if (name && last_name && curp && age && job && imss && clabe) {
        let query = "INSERT INTO employee(name, last_name, curp, age, job, imss, clabe)"
        query += `VALUES(
        '${name}',
        '${last_name}',
        '${curp}',
        '${age}',
        '${job}',
        '${imss}',
        '${clabe}')`

        const rows = await db.query(query)

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Empleado agregado correctamente" })
        }
        return res.status(500).json({ code: 500, message: "Ocurrió un problema" })
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" })
})

employee.delete('/:id([0-9]{1,4})', async (req, res, next) => {
    const id = req.params.id
    const query = `DELETE FROM employee WHERE employee_id=${id}`
    const rows = await db.query(query)

    if (rows.affectedRows == 1) {
        return res.status(200).json({
            code: 20,
            message: "Empleado borrado correctamente"
        })
    }
    return res.status(404).json({
        code: 1,
        message: 'Empleado no encontrado 😕'
    })
})

employee.put('/:id([0-9]{1,4})', async (req, res, next) => {
    const { name, last_name, curp, age, job, imss, clabe } = req.body
    if (name && last_name && curp && age && job && imss && clabe) {

        let query = `UPDATE employee SET
                    name= '${name}',
                    last_name= '${last_name}',
                    curp= '${curp}',
                    age= '${age}',
                    job= '${job}',
                    imss= '${imss}',
                    clabe= '${clabe}'
                    WHERE employee_id=${req.params.id}`

        const rows = await db.query(query)

        if (rows.affectedRows == 1) {
            return res.status(200).json({
                code: 20,
                message: "Empleado actualizado correctamente"
            })
        }
        return res.status(404).json({
            code: 1,
            message: 'Empleado no encontrado 😕'
        })
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" })
})

employee.patch('/:id([0-9]{1,4})', async (req, res, next) => {

    if (req.body.pok_name) {
        let query = `UPDATE employee SET
                    name= '${req.body.name}'
                    WHERE employee=${req.params.id}`

        const rows = await db.query(query)

        if (rows.affectedRows == 1) {
            return res.status(200).json({
                code: 20,
                message: "Empleado actualizado correctamente"
            })
        }
        return res.status(404).json({
            code: 1,
            message: 'Empleado no encontrado 😕'
        })
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" })
})

employee.get('/', async (req, res, next) => {
    const empl = await db.query("SELECT * FROM employee")
    res.status(200).json({
        code: 1,
        message: empl
    })
})

employee.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id
    if (id >= 0 && id <= 722) {
        const empl = await db.query("SELECT * FROM employee WHERE employee_id = " + id)
        return res.status(200).json({
            code: 1,
            message: empl
        })
    }
    return res.status(404).json({
        code: 1,
        message: 'Empleado no encontrado 😕'
    })
})

employee.get('/:search([A-Za-z]+)', async (req, res, next) => {
    const search = req.params.search
    const empl = await db.query(
        `SELECT * FROM employee WHERE name LIKE '${search}%'
        OR last_name LIKE '${search}%'
        OR curp LIKE '${search}%'
        OR name LIKE '${search}%'`)
    return empl.length > 0 ? res.status(200).json({
        code: 1,
        message: empl
    }) : res.status(404).json({
        code: 1,
        message: 'Empleado no encontrado 😕'
    })
})

module.exports = employee