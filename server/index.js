import express from 'express'
import consola from 'consola'
import { loadNuxt } from 'nuxt-start'
const app = express()

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  await nuxt.listen(process.env.PORT, process.env.HOST)
}

start()