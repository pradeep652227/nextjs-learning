import jwt  from "jsonwebtoken"

export const decodedToken = (token) => {
    const secret = String(process.env.NEXT_PUBLIC_JWT_SECRET);
    const decodedInfo = jwt.verify(token, secret);
    return decodedInfo;
}