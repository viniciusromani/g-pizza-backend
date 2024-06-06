import express from "express";

import { errorHandler } from "@presentation/middleware";


require("dotenv").config();

const app = express();
app.use(express.json());

// TODO: Remove this by setting DI
// Auth Router (should all not be here)
import { AuthUseCase } from '@domain/use-case';
import { ExternalRepositoryImpl, LocalRepositoryImpl } from '@data/repository';
import { AuthController } from '@presentation/controller';
import { AuthRouter } from '@presentation/router';

const externalRepo = new ExternalRepositoryImpl();
const localRepo = new LocalRepositoryImpl();
const useCase = new AuthUseCase(externalRepo, localRepo);
const controller = new AuthController(useCase);

// this should be here
const router = new AuthRouter(controller);
app.use("/authenticate", router.instance);

app.use(errorHandler.handle)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
