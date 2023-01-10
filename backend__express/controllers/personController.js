import { QueryTypes } from "sequelize"
import models, {sequelize} from "../models/init-models"
import bcrypt from 'bcrypt'

const findAllUser = async(request, response) => {
    const result = await models.person.findAll()
    return response.send(result)
}

const findUserByEmail = async(callback, email) => {
    // Record from table person along with email and its password.
    const sql = `
        SELECT *
        FROM pe.p
        JOIN pe.e USING (BusinessEntityID)
        JOIN pe.pa USING (BusinessEntityID)
        WHERE emailaddress = :email
        LIMIT 1
    `
    const result = await sequelize.query(
        sql,
        {
            replacements: {email: email}
        }
    )

    // const result = await sequelize.findOne(
    //     {
    //         where: {
    //             emailaddress: input.email
    //         }
    //     }
    // )

    callback(result[0]) // data only
}

const createUser = async(request, response) => {
    const password = request.body.password

    // Salt
    const passwordSalt = bcrypt.genSaltSync(10)

    // Hashing
    const passwordHash = bcrypt.hashSync(password, passwordSalt)
    
    const sql = `CALL SignUp(:firstname, :middlename, :lastname, :suffix, :email, :phone, :persontype, :passwordhash, :passwordsalt);`
    // const sql = `
    //     CREATE OR REPLACE FUNCTION getNewBusinessEntityID ()
    //     RETURNS int
    //     AS $$
        
    //     BEGIN
    //         RETURN (SELECT SETVAL('person."businessentity_businessentityid_seq"', 
    //                             (SELECT MAX(BusinessEntityID) FROM Person.BusinessEntity) + 1
    //                             )
    //             );
    //     END; $$
    //     LANGUAGE plpgsql;

    //     CREATE OR REPLACE PROCEDURE SignUp(
    //         FirstName 			text,
    //         MiddleName 			text,
    //         LastName			text,
    //         Suffix				text,
    //         Email				text,
    //         PhoneNumber			text,
    //         PersonType			text,
    //         PasswordHash		text,
    //         PasswordSalt        text
    //     )
    //     AS $$
        
    //     DECLARE
    //         BusinessEntityID int;
        
    //     BEGIN
    //         BusinessEntityID := getNewBusinessEntityID();
    //         INSERT INTO pe.be (BusinessEntityID)
    //             VALUES (BusinessEntityID);
    //         INSERT INTO pe.p (BusinessEntityID, FirstName, MiddleName, LastName, Suffix, PersonType) 
    //             VALUES (BusinessEntityID, FirstName, MiddleName, LastName, Suffix, PersonType);
    //         INSERT INTO pe.pp (BusinessEntityID, PhoneNumber, PhoneNumberTypeID)
    //             VALUES (BusinessEntityID, PhoneNumber, 1);
    //         INSERT INTO pe.e (BusinessEntityID, EmailAddress)
    //             VALUES (BusinessEntityID, Email);
    //         INSERT INTO pe.pa (BusinessEntityID, PasswordHash, PasswordSalt)
    //             VALUES (BusinessEntityID, PasswordHash, PasswordSalt);
    //     END; $$
    //     LANGUAGE plpgsql;

    //     CALL SignUp(:firstname, :middlename, :lastname, :suffix, :email, :phone, :persontype, :passwordhash, :passwordsalt);    
    // `

    await sequelize.query(
        sql,
        {
            type: QueryTypes.INSERT,
            replacements: {
                firstname: request.body.firstname,
                middlename: request.body.middlename,
                lastname: request.body.lastname,
                suffix: request.body.suffix,
                email: request.body.email,
                phone: request.body.phone,
                persontype: request.body.persontype,
                passwordhash: passwordHash,
                passwordsalt: passwordSalt
            }
        }
    ).then(result => {
        return response.send(`User has been created.`)
    }).catch(result => {
        return response.send(`Creating user failed.`)
    })
}

export default {
    createUser,
    findAllUser,
    findUserByEmail
}