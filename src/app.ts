import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app: Application = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 5001;
app.get("/get", (req: Request, res: Response, next: NextFunction) => {
	const number = 2;

	if (number === 1) {
		res.status(200).json({
			success: true,
			message: "response true",
		});
	}
	next();
});

app.all('*',(req,res,next)=>{
    // res.status(404).json({
    //     status:'fail',
    //     message:'can not find desired url'
    // })
    const err = new Error('can not find desired url');
    err.status = 'fail';
    err.statusCode = 404;

    next(err)
})

app.listen(port, () => {
	console.log(`server started at port ${port}`);
});

app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || 'error'
    res.status(error.statusCode).json({
        success: false,
        status:error.statusCode,
        message: "response false",
    });
    next()
});
