import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

export interface IcustomRequest extends Request {
  token: string | JwtPayload
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) {
      throw new Error("No token provided")
    }

    const decoded = jwt.verify(token, "secretKey" || "")
    // console.log("decoded", decoded)
    if (!decoded) {
      throw new Error("Invalid token")
    }
    ;(req as IcustomRequest).token = decoded
    next()
  } catch (err) {
    console.log("No esta autorizado!!", err)
    res.status(401).send({ error: "Please authenticate" })
  }
}
