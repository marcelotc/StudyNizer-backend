/* 
create table users ( id serial primary key, name text not null, email text not null, password varchar not null );
*/

/* 
create table tasks_todo (
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
create table tasks_doing (
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
create table tasks_completed (
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
export const checkTaskExists = "SELECT s FROM tasks s WHERE s.id = $1";

// Board Tasks todo queries

export const getBoardTasksTodoQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_todo as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksTodoQuery = "insert into tasks_todo (title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6)";
export const updateBoardTodoTasksQuery = "UPDATE tasks_todo SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksTodoQuery = "DELETE FROM tasks_todo WHERE id = $1";

// Board Tasks doing queries

export const getBoardTasksDoingQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_doing as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksDoingQuery = "insert into tasks_doing (title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6)";
export const updateBoardTasksDoingQuery = "UPDATE tasks_doing SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksDoingQuery = "DELETE FROM tasks_doing WHERE id = $1";

// Board Tasks completed queries

export const getBoardTasksCompletedQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_completed as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksCompletedQuery = "insert into tasks_completed (title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6)";
export const updateBoardTasksCompletedQuery = "UPDATE tasks_completed SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksCompletedQuery = "DELETE FROM tasks_completed WHERE id = $1";

// Subjects queries

export const getSubjectsQuery = "select U.id as user_id, U.name, U.email, S.id as subject_id, S.title from users as U inner join subjects as S on U.id = S.users_id WHERE U.id = $1";
export const addSubjectsQuery = "insert into subjects (title, users_id)  values ($1, $2)";
export const checkSubjectsExists = "SELECT s FROM subjects s WHERE s.id = $1";
export const updateSubjectsQuery = "UPDATE subjects SET title = $1 WHERE id = $2";
export const deleteSubjectsQuery = "DELETE FROM subjects WHERE id = $1";