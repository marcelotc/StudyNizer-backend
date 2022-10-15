/* 
create table users ( id serial primary key, name text not null, email text not null, password varchar not null );
*/

/* 
create table tasks (
    id serial primary key,
    title text not null, 
    description text not null, 
    priority text not null, 
    dueDateStart date not null, 
    dueDateEnd date not null, 
    users_id integer REFERENCES users(id) ON DELETE CASCADE
);
*/

/* 
create table subjects (
    id serial primary key,
    title text not null, 
    users_id integer REFERENCES users(id) ON DELETE CASCADE
);
*/

export const checkUserExists = "SELECT u FROM users u WHERE u.id = $1";

// Board Tasks queries

export const getBoardTasksQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksQuery = "insert into tasks (title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6)";
export const checkTaskExists = "SELECT s FROM tasks s WHERE s.id = $1";
export const updateBoardTasksQuery = "UPDATE tasks SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksQuery = "DELETE FROM tasks WHERE id = $1";

// Subjects queries

export const getSubjectsQuery = "select U.id as user_id, U.name, U.email, S.id as subject_id, S.title from users as U inner join subjects as S on U.id = S.users_id WHERE U.id = $1";
export const addSubjectsQuery = "insert into subjects (title, users_id)  values ($1, $2)";
export const checkSubjectsExists = "SELECT s FROM subjects s WHERE s.id = $1";
export const updateSubjectsQuery = "UPDATE subjects SET title = $1 WHERE id = $2";
export const deleteSubjectsQuery = "DELETE FROM subjects WHERE id = $1";