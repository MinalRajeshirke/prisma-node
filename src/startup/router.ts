
import { register as registerUserRoute } from "../routes/UserRouter";
import { register as registerCartRoute } from "../routes/CartRouter";
import { register as registerWishlistRoute } from "../routes/WishlistRouter";
import { register as registerOrderRoute } from "../routes/OrderRouter";
import{register as registerShippingRoute} from "../routes/ShippingRouter";
// import { register as registerProductRoute } from "../routes/ProductRouter";
import express from "express";
export class Router {
    private _app : express.Application 
    constructor(app:express.Application){
        this._app= app;
    //got refrence of ro
    }
    // initialize routers
    public init = async():Promise<boolean>=>{
        return new Promise((resolve,reject)=>{
            try{
                this._app.get("app/v1/",(req,res)=>{
                    res.send({message:'Demo Api service'})
                })
                registerUserRoute(this._app);//resgistering userRouter
                registerCartRoute(this._app);
                registerWishlistRoute(this._app)
                registerOrderRoute(this._app)
                registerShippingRoute(this._app)
                // registerProductRoute(this._app)

            }catch(erro){ console.log("Error initialing the routes")}
           
        })
    }
}