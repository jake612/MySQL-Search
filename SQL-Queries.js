
export const buildTableIndex =
`CREATE TABLE IF NOT EXISTS __sqlsearchindex__ (
    id INTEGER AUTOINCREMENT,
    string TEXT NOT NULL,
    count INTEGER NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT CountAboveZero CHECK count>=0
)`;

// Current assumption: the referenced table has a primary key which is an integer
export const buildTableIndexVal = 
`CREATE TABLE IF NOT EXISTS __sqlsearchindexval__(
    id INTEGER NOT NULL,
    docID INTEGER NOT NULL,
    count INTEGER NOT NULL,
    PRIMARY KEY(id, docID),
    CONSTRAINT CountAboveZero CHECK count>=0,
    FOREIGN KEY(docID) REFERENCES __sqlsearchindex__(id) ON DELETE CASCADE
)`;