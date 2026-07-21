import Redis from 'ioredis';

const redis = new Redis(Process.env.REDIS_URL);

redis.on("connect", ()=>{
    console.log("Redis connected successfully");
})

export default redis;