import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes/index";
import ApiError from "./errors/ApiError";
import globalErrorHandler from "./middleware/globalErrorHandler";
const app: Application = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	throw new Error("Test path");
	// next('Ore bana error')
});

app.get("/get", (req: Request, res: Response, next: NextFunction) => {
	const number: number = 2;

	if (number === 1) {
		res.status(200).json({
			success: true,
			message: "response true",
		});
	}
	next();
});

//If no route found

app.all('*',(req,res,next)=>{
    // res.status(404).json({
    //     status:'fail',
    //     message:'can not find desired url'
    // })
    
    
    // err?.status = 'fail';
    // err?.statusCode = 404;
    const err = new Error('Your route is not valid');
    next(err)
})

app.use(globalErrorHandler);

export default app;
