import { Request, Response } from "express"; 
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";


interface RequestExt extends Request{
    user?: string | JwtPayload;
};

const getItems = (req:RequestExt, res:Response) => {
    try{

        res.send({
            data:"ESTO SOLO LO VE LAS PERSONAS CON SESSION / JWT",
            user:req.user,
        })
    }catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
};


export {getItems };