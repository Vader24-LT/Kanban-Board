import { Sequelize } from 'sequelize'; // Import Sequelize
import dotenv from 'dotenv';
dotenv.config();


let sequelize;

if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
} else {
    console.log('Using local database');
    sequelize = new Sequelize(

        process.env.DB_NAME || 'default_db_name',
        process.env.DB_USER || 'default_user',
        process.env.DB_PASSWORD || 'default_password',
        {
            host: 'localhost',
            dialect: 'postgres'
        },
    );
}