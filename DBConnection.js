const mysql = require('mysql2');

class DBConnection{
    constructor(db){
        // Passed database must be a connection or a pool
        this.db = db
    }

    // Input: retrieval ranking formula, delimiter to split input string
    // Output: none
    setFormula(formFunction, delimiter){
        if(delimiter===null){
            this.delimiter=" ";
        } else{
            this.delimiter = delimiter;
        }
        // Function passed as argument should take in an array of strings and return a double
        // Check documentation on creating a retrieval formula 
        this.formula = formFunction
    }

    
    buildIndex(table, field){

    }

    

}