import pg from 'pg';
const client = new pg.Client({
    user: 'postgres',
    database: 'postgres',
    host: 'localhost',
    password: 'SECRET',
    port: 5432,
});
export default client;
//# sourceMappingURL=db.js.map