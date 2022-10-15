/* 
create table users (
    id serial primary key,
    name text not null, 
    email text not null, 
    password varchar not null, 
);
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

export const getBoardTasksQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks as T on U.id = T.users_id;";
export const addBoardTasksQuery = "insert into tasks (title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6);";
export const checkUserExists = "SELECT s FROM users s WHERE s.id = $1";
export const checkTaskxists = "SELECT s FROM tasks s WHERE s.id = $1";
export const updateBoardTasksQuery = "UPDATE tasks SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksQuery = "DELETE FROM tasks WHERE id = $1";