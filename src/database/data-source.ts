import { DataSource } from "typeorm"

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'fastcampus',
    password: 'fastcampus1234',
    database: 'postgres',
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations'
})