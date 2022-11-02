/* 
create table users ( id uuid DEFAULT gen_random_uuid() PRIMARY KEY, name text not null, email text not null, password varchar not null );
*/

/* 
create table tasks_todo (
    id uuid PRIMARY KEY,
    title text not null, 
    description text not null, 
    priority text not null, 
    due_date_start timestamptz not null, 
    due_date_end timestamptz not null, 
    users_id uuid REFERENCES users(id) ON DELETE CASCADE
);
*/

/* 
create table tasks_doing (
    id uuid PRIMARY KEY,
    title text not null, 
    description text not null, 
    priority text not null, 
    due_date_start timestamptz not null, 
    due_date_end timestamptz not null, 
    users_id uuid REFERENCES users(id) ON DELETE CASCADE
);
*/

/* 
create table tasks_completed (
    id uuid PRIMARY KEY,
    title text not null, 
    description text not null, 
    priority text not null, 
    due_date_start timestamptz not null, 
    due_date_end timestamptz not null, 
    users_id uuid REFERENCES users(id) ON DELETE CASCADE
);
*/

/* 
create table subjects (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text not null, 
    users_id uuid REFERENCES users(id) ON DELETE CASCADE
);
*/

/*
create table markdown (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    annotation_block jsonb not null, 
  	page_name text not null,
    url_id text not null,
    page_id uuid not null,
    subject_name text not null,
    users_id uuid REFERENCES users(id) ON DELETE CASCADE,    
);

insert into markdown (annotation_block, url_id, page_id, subject_name, users_id) values ('{
    "blocks": [
        {
            "key": "20282b61-8f6d-43ae-886b-566950e94431",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "b7f60e1c-acff-4145-8fdc-94fc490c39da",
            "text": "fvfgfg",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "7d2b8531-6df8-4ae0-9ccc-291eb32547ad",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "47ed78c5-730e-40db-b821-b9730a765d07",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "725787c1-d6fd-4355-a941-d7ff0e90ee0f",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "981da12b-ef1a-41a6-a719-bcebc99b3331",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "e065d09e-9d3a-478a-8791-a6edee3b798d",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "6e0d42e4-9e9a-46af-a627-cb6fb4d290cc",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "76277c2f-e55d-4f57-ba43-e2af7c407754",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "18f503a3-bc75-47d9-ab13-cd00b25f7e39",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ],
    "entityMap": {}
}', 'url tstttt', 'e85aa5e8-9310-4844-9ae1-d13d0f171a29', 'sitemsa operacionais', 'f3d9395e-5029-4e43-b5ed-72db6d67452e');*/

export const checkUserExists = "SELECT u FROM users u WHERE u.id = $1";
export const checkTaskTodoExists = "SELECT s FROM tasks_todo s WHERE s.id = $1";
export const checkTaskDoingExists = "SELECT s FROM tasks_doing s WHERE s.id = $1";
export const checkTaskCompletedExists = "SELECT s FROM tasks_completed s WHERE s.id = $1";
export const checkMarkdownExists = "SELECT s FROM markdown s WHERE s.id = $1";

// Board Tasks todo queries

export const getBoardTasksTodoQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_todo as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksTodoQuery = "insert into tasks_todo (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTodoTasksQuery = "UPDATE tasks_todo SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksTodoQuery = "DELETE FROM tasks_todo WHERE id = $1";

// Board Tasks doing queries

export const getBoardTasksDoingQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_doing as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksDoingQuery = "insert into tasks_doing (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTasksDoingQuery = "UPDATE tasks_doing SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksDoingQuery = "DELETE FROM tasks_doing WHERE id = $1";

// Board Tasks completed queries

export const getBoardTasksCompletedQuery = "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_completed as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksCompletedQuery = "insert into tasks_completed (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTasksCompletedQuery = "UPDATE tasks_completed SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksCompletedQuery = "DELETE FROM tasks_completed WHERE id = $1";

// Subjects queries

export const getSubjectsQuery = "select U.id as user_id, U.name, U.email, S.id as subject_id, S.title from users as U inner join subjects as S on U.id = S.users_id WHERE U.id = $1";
export const addSubjectsQuery = "insert into subjects (title, users_id)  values ($1, $2)";
export const checkSubjectsExists = "SELECT s FROM subjects s WHERE s.id = $1";
export const updateSubjectsQuery = "UPDATE subjects SET title = $1 WHERE id = $2";
export const deleteSubjectsQuery = "DELETE FROM subjects WHERE id = $1";

// Markdown queries

export const getMarkdownQuery = "select U.id as user_id, U.name, U.email, M.id as markdown_id, M.subject_name, M.annotation_block, M.page_name, M.url_id, M.page_id from users as U inner join markdown as M on U.id = M.users_id WHERE U.id = $1";
export const getMarkdownToExportQuery = "select U.id as user_id, U.name, U.email, S.id as subject_id, S.title from users as U inner join subjects as S on U.id = S.users_id WHERE U.id = $1 and M.subject_name = $2";
export const addMarkdownQuery = "insert into markdown (annotation_block, page_name, url_id, page_id, subject_name, users_id)  values($1, $2, $3, $4, $5, $6)";
export const updateMarkdownQuery = "UPDATE markdown SET annotation_block = $1, page_name = $2, url_id = $3, page_id = $4, subject_name = $5 WHERE id = $6";
export const deleteMarkdownQuery = "DELETE FROM markdown WHERE id = $1";
