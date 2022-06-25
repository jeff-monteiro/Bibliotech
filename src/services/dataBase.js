export default class DataManager {
    
    async createTableUser() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    }

    async openDatabase() {
        return await db;
    }

    async createUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [user.email, user.password]);
        });
    }

    async getUser(id) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }

    async deleteUser(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    async updateUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [user.email, user.password]);
        });
    }
}