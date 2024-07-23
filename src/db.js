import pg from 'pg'

export const pool = new pg.Pool({
user: "adrian",
host: "localhost",
database: "checkliftapp",
port:"5432",
idleTimeoutMillis: 0,
connectionTimeoutMillis: 0,
})

