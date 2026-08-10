import redis from "../../shared/redis/redis.js"

export const protect = async (req, res, next) => {
  try {
    const sessionId = req.cookies?.sessionId;



    if (!sessionId) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const key = `session:${sessionId}`;



    const session = await redis.get(key);



    if (!session) {
      return res.status(401).json({
        message: "session expired"
      });
    }

    req.user = JSON.parse(session);

    next();

  } catch (error) {
    console.error("PROTECT ERROR:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

