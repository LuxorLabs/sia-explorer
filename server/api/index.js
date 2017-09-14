const axios = require('axios')
const router = require('express').Router()

const siad = axios.create({
  baseURL: 'http://localhost:9980',
  timeout: 5000,
  headers: {
    'User-Agent': 'Sia-Agent'
  }
})

router.get('/block/:height', (req, res) => {
  const { height } = req.params
  siad.get(`/explorer/blocks/${height}`).then(({ data }) => {
    res.send(data)
  })
})

router.get('/hash/:hash', (req, res) => {
  const { hash } = req.params
  siad.get(`/explorer/hashes/${hash}`).then(({ data }) => {
    res.send(data)
  })
})

router.get('/status', (req, res) => {
  siad.get('/consensus').then(({ data }) => {
    res.send(data)
  })
})

module.exports = router
