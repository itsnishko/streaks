IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'activity')
BEGIN
    EXEC('CREATE SCHEMA activity');
END;

CREATE TABLE activity.[record] (
    [id] UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    [name] NVARCHAR(100) NOT NULL,
    [description] NVARCHAR(255),
    [created-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [created-by] NVARCHAR(100) NOT NULL,
    [updated-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [updated-by] NVARCHAR(100) NOT NULL
);