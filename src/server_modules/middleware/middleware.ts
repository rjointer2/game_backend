
import { User } from "../../model/user";
import bcrypt from "bcrypt";



export interface RequestWithHeadersAuth extends Request {
    header: {
        authorization: string
    }
}

export type Middleware = {
    verify: () => any
}


export default function middleware({ req, res } : { req: RequestWithHeadersAuth, res: Response }): Middleware {
    return {
        verify: () => {
            console.log('I was invoked')
        }
    }
}


