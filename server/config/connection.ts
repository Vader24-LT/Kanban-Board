import { Sequelize } from 'sequelize'; // Import Sequelize
import dotenv from 'dotenv';
dotenv.config();


let sequelize;

if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
} else {
    console.log('Using local database');
    sequelize = new Sequelize(

        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres'
        },
    );
}