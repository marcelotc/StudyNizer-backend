import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import pool from '../../config/db.js';
import { authConfig } from "../../config/auth.js";

//Registration Function

export const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, 
        [email]); //Checking if user already exists
        const arr = data.rows;
        if (arr.length != 0) {
            return res.status(400).json({
                error: "Email já cadastrado!",
            });
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err)
                    res.status(err).json({
                        error: "Server error",
                    });
                const user = {
                    name,
                    email,
                    password: hash,
                };
                var flag = 1; //Declaring a flag

                //Inserting data into the database

                pool
                    .query(`INSERT INTO users (name, email, password) VALUES ($1,$2,$3);`, 
                    [user.name, user.email, user.password], (err) => {

                        if (err) {
                            flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
                            console.error(err);
                            return res.status(500).json({
                                error: "Database error"
                            })
                        }
                        else {
                            flag = 1;
                            res.status(200).send({ message: 'User added to database, not verified' });
                        }
                    })
                if (flag) {
                    const token = jwt.sign( //Signing a jwt token
                        {
                            email: user.email
                        },
                        authConfig.expiresIn
                    );
                };
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!", //Database connection error
        });
    };
}



//Login Function
export const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [email]) //Verifying if the user exists in the database
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "Usuário não cadastrado",
            });
        }
        else {
            bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) { //Checking if credentials match
                    const token = jwt.sign(
                        {
                            email: email,
                        },
                        authConfig.secret, {
                            expiresIn: authConfig.expiresIn
                        }
                    );
                    res.status(200).json({
                        id: data?.rows[0].id,
                        name: data?.rows[0].name,
                        token: token,
                    });
                }
                else {
                    //Declaring the errors
                    if (result != true)
                        res.status(400).json({
                            error: "Senha incorreta!",
                        });
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occurred while signing in!", //Database connection error
        });
    };
};