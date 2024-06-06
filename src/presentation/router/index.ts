import express from "express";
export abstract class Router {
  constructor(
    protected readonly router = express.Router()
  ) { };
  
  public instance = this.router;
}

// EXPORTS BELOW HERE
export * from "./auth.router";
