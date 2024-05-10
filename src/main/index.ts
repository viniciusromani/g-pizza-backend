import express from 'express'

require('dotenv').config()

const app = express()
app.use(express.json())

// TODO: Remove this by setting DI
// Auth Router (should all not be here)
import { AuthUseCaseImpl } from '@domain/use-case'
import { ExternalRepositoryImpl, LocalRepositoryImpl } from '@data/repository'
import { AuthController } from '@presentation/controller'
import { AuthRouter } from '@presentation/router'
const externalRepo = new ExternalRepositoryImpl()
const localRepo = new LocalRepositoryImpl()
const useCase = new AuthUseCaseImpl(externalRepo, localRepo)
const controller = new AuthController(useCase)
const router = new AuthRouter(controller)
// this should be here
app.use('/authenticate', router.get())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
