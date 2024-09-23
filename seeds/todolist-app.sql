CREATE TYPE task_status AS ENUM('In Progress','In Review','Stuck','Completed');
CREATE TYPE task_priority AS ENUM('Could Have', 'Must Have', 'Nice to Have', 'Should Have', 'Not Important');
CREATE TABLE tasks (
    id UUID NOT NULL,
    task_name VARCHAR(255),
    task_description VARCHAR(300),
    task_asignee VARCHAR(255),
    task_status task_status task_status DEFAULT 'In Progress',
    task_priority task_priority,
    start_date TIMESTAMP,
    due_date TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL
)