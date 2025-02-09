IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'activity')
BEGIN
    EXEC('CREATE SCHEMA activity');
END;

CREATE TABLE activity.[value] (
    [record-id] UNIQUEIDENTIFIER NOT NULL,
    [field-id] UNIQUEIDENTIFIER NOT NULL,
    [data] NVARCHAR(100) NULL,
    [created-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [created-by] NVARCHAR(100) NOT NULL,
    [updated-on] DATETIME DEFAULT GETDATE() NOT NULL,
    [updated-by] NVARCHAR(100) NOT NULL,
    CONSTRAINT FK_Value_Record FOREIGN KEY ([record-id]) REFERENCES activity.[record]([id]) ON DELETE NO ACTION,
    CONSTRAINT FK_Value_Metric FOREIGN KEY ([field-id]) REFERENCES activity.[metric]([id]) ON DELETE NO ACTION
);