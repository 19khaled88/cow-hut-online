import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.join(process.cwd(), '.env')})


export default{
    env:process.env.NODE_ENV,
    port:process.env.PORT,
    databasr_url:process.env.DB_URL,
    user_pass:process.env.USER_PASS
}