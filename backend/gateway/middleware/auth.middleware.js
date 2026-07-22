import redis from "../../shared/redis/redis.js"

export const protect = async(req, res, next) => {
    try{
    const seessionId = req.cookies?.sessionId
    if(!seessionId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
   const session = await redis.get(`sessionId: ${seessionId}`)
   if(!session){
        return res.status(401).json({ message: "session expired" });
   }
   req.user = JSON.parse(session)
   next();
}
catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
}
}

