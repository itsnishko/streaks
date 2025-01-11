import { Connection, Request as TediousRequest } from 'tedious';
import { connectToDB } from '../config/database.js';

const schemaSQL = `
  CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL
  );

  CREATE TABLE Habits (
    id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT NOT NULL,
    habit_name NVARCHAR(100) NOT NULL,
    description NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
  );

  CREATE TABLE DataTypes (
    id INT PRIMARY KEY IDENTITY(1,1),
    type_name NVARCHAR(50) NOT NULL
  );

  CREATE TABLE HabitSettings (
    id INT PRIMARY KEY IDENTITY(1,1),
    habit_id INT NOT NULL,
    field_name NVARCHAR(100) NOT NULL,
    data_type_id INT NOT NULL,
    FOREIGN KEY (habit_id) REFERENCES Habits(id) ON DELETE CASCADE,
    FOREIGN KEY (data_type_id) REFERENCES DataTypes(id)
  );

  CREATE TABLE HabitRecords (
    id INT PRIMARY KEY IDENTITY(1,1),
    habit_id INT NOT NULL,
    record_date DATE NOT NULL,
    record_time TIME NOT NULL,
    value NVARCHAR(255),
    FOREIGN KEY (habit_id) REFERENCES Habits(id) ON DELETE CASCADE
  );
`;

const createSchema = (connection: Connection) => {
  const request = new TediousRequest(schemaSQL, (err) => {
    if (err) {
      console.error('❌ Error creating schema:', err);
    } else {
      console.log('✅ Database schema created successfully');
    }
    connection.close();
  });

  connection.execSql(request);
};

connectToDB(createSchema);