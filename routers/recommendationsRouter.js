
const express = require('express')
const recommendationsRouter = express.Router()
const db = require('../dbConfig')

recommendationsRouter.get('/:id',async (req,res)=> {
  const userid = req.params.id
  const recommendations = await db('recommendations').where({userid})
  res.status(200).json(recommendations)
})


recommendationsRouter.post('/:id',(req,res)=> {
    req.body.userid = req.params.id
  return db('recommendations').insert(req.body)
        .then(resp => {
            if(resp){
                res.status(201).json({message:'recommendation added'})
            } else {
                res.status(500).json({message:'something went wrong'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:'recommendation cannot be added.'})
        })
})


recommendationsRouter.delete('/:id',(req,res)=> {
    const id = req.params.id
  return db('recommendations').where({id}).del()
        .then(resp => {
            res.status(200).json({message:'recommendation deleted'})
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({message:'recommendation NOT deleted.'})
        })
})

module.exports = recommendationsRouter





