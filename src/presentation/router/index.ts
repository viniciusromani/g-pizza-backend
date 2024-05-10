import express from 'express'
export abstract class Router {
  constructor(
    protected readonly router = express.Router()
  ) { }
  
  public get() { return this.router }
}

// EXPORTS BELOW HERE
export * from './auth.router'
