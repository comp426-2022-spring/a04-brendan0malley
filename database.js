"use strict";

const Database = require('better-sqlite3');

// Create/connect database
const db = new Database('log.db')

// Prepare database
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );