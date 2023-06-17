import express from "express";
import  sqlite3  from "sqlite3";

sqlite3.verbose();

function errorHandling(err) {
    if (err) {
        console.log(err);
    } else console.log('!!!!!!!!!!!!!Mukod!!!!!!!!!!!')
}

const db = new sqlite3.Database('./products.db', errorHandling);

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS products
        (id INT, 
        categoryId INT, 
        imageURL char(255), 
        price INT, 
        title char(255))`
        ,errorHandling);
    db.close();
});

// categoryID átkötése kapcsolótáblába!