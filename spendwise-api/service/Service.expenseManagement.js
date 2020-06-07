var db = require('../db/dbConnection');

var expenseManagementService = {
    handlefetchDailyExpenses: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchDailyExpenses(?,?)', [data.searchDate, data.page], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handlefetchDailyExpenses : " + e);
        }
    },
    handlefetchTodaysExpensesByUserId: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchTodaysExpensesByUserId(?,?)', [data.searchDate, data.userID], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handlefetchTodaysExpensesByUserId : " + e);
        }
    },
    handleaddTransactionByUserId: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_AddTransactionByUserId(?,?,?,?,?,?,?)', [data.categoryId, data.description, data.amount, data.expenseType, data.transactionDate, data.createdBy, data.modifiedBy], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handleaddTransactionByUserId : " + e);
        }
    },
    handlefetchDailyExpenseSummary: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchDailyExpenseSummary(?)', [data.searchDate], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handlefetchDailyExpenseSummary : " + e);
        }
    },
    handleaddBulkTransaction: function (data) {
        try {
            return new Promise((resolve, reject) => {
                var SQL = 'INSERT INTO tbl_expenses (CategoryId, Description, Amount, ExpenseType, DateofEntry,CreatedBy, ModifiedBy) VALUES ?';
                db.query(SQL, [data], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handleaddBulkTransaction : " + e);
        }
    },
    handleDeleteTransaction: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_DeleteTransaction(?)', [data], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handleDeleteTransaction : " + e);
        }
    },
    handleGetTransactionListByDateRange: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchTransactionDetails(?,?)', [data.startDate, data.endDate], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handleGetTransactionListByDateRange : " + e);
        }
    }
};
module.exports = expenseManagementService;