
export interface RequestWithHeadersAuth extends Request {
    header: {
        authorization: string
    }
}


export default function middleware({ req, res } : { req: RequestWithHeadersAuth, res: Response }) {
    
}