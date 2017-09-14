const axios = require('axios')
const router = require('express').Router()

const siad = axios.create({
  baseURL: 'http://localhost:9980/explorer',
  timeout: 5000,
  headers: {
    'User-Agent': 'Sia-Agent'
  }
})

router.get('/block/:height', (req, res) => {
  const { height } = req.params
  siad.get(`/blocks/${height}`).then(({ data }) => {
    res.send(data)
  })
})

module.exports = router
