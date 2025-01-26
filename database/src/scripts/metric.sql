IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'activity')
BEGIN
    EXEC('CREATE SCHEMA activity');
END;

CREATE TABLE activity.[metric] (
    [id] UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    [activity-id] UNIQUEIDENTIFIER NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [description] NVARCHAR(255),
    [data-type] NVARCHAR(50) NOT NULL,
    [is-required] BIT DEFAULT 0 NOT NULL,
    [is-active] BIT DEFAULT 1 NOT NULL,
    [created-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [created-by] NVARCHAR(100) NOT NULL,
    [updated-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [updated-by] NVARCHAR(100) NOT NULL,
    CONSTRAINT FK_Metric_Activity FOREIGN KEY ([activity-id]) REFERENCES activity.[activity]([id]) ON DELETE CASCADE
);