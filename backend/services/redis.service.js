import Redis from 'ioredis';



const redisClient = new Redis({
    host: 'redis-10501.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 10501,
    password: 'JReIMSUGn7jO4lC8QkUlO0aDrK0dB5IY'
    
});


redisClient.on('connect', () => {
    console.log('Redis connected');
})

export default redisClient;


