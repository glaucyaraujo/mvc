import express from "express";
import ApiController from "../controllers/apiControllers";

const router = express.Router();

router
.get("/", ApiController.getAllApis)