CREATE TYPE task_status AS ENUM('In Progress','In Review','Stuck','Completed');
CREATE TYPE task_priority AS ENUM('Could Have', 'Must Have', 'Nice to Have', 'Should Have', 'Not Important');
CREATE TABLE tasks (
    task_id UUID NOT NULL PRIMARY KEY,
    task_name VARCHAR(255),
    task_description VARCHAR(300),
    task_asignee VARCHAR(255),
    task_status task_status task_status DEFAULT 'In Progress',
    task_priority task_priority,
    start_date TIMESTAMP,
    due_date TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    project_id INT REFERENCES projects(project_id) ON DELETE CASCADE
)
CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (project_id, project_name, project_description) 
VALUES (1, 'Sep 2024 Monthly Closing', 'Finance Monthly Closing to be finish on time');

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98694f5', 'Create Working Paper Payroll', 'Create Working Paper Payroll after receiving from JV', 'Isti Amelia Isnaeni', 'Should Have', '2024-09-27', '2024-09-30', 1);

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98694f7', 'Upload Manual Adjustment', 'Upload Manual Adjustment after finishing drafting all the journals', 'Isti Amelia Isnaeni', 'Should Have', '2024-09-27', '2024-09-30', 1);

INSERT INTO projects (project_id, project_name, project_description) 
VALUES (2, 'Audit FY2023', 'Audit IKN FY2023');

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98694f8', 'Draft CAJE', 'Draft CAJE on Gsheet', 'Isti Amelia Isnaeni', 'Should Have', '2024-09-27', '2024-09-30', 2);

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98696f8', 'Aging AR', 'Create Aging Account Receivable', 'Isti Amelia Isnaeni', 'Nice to Have', '2024-09-27', '2024-09-30', 2);

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98692f8', 'Equalization of Revenue', 'Equalization of Revenue', 'Isti Amelia Isnaeni', 'Could Have', '2024-09-27', '2024-09-30', 2);

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c98292f8', 'Checking FDIS', 'to Check FDIS', 'Isti Amelia Isnaeni', 'Must Have', '2024-09-25', '2024-09-25', 1);

INSERT INTO projects (project_id, project_name, project_description) 
VALUES (3, 'Testing FDIS New Feature', 'Testing FDIS New Feature');

INSERT INTO tasks (task_id, task_name, task_description, task_asignee, task_priority, start_date, due_date, project_id)
VALUES ('3ac2bf42-151a-4fba-9b84-5038c78292f8', 'Check BRI Provider', 'to Check FDIS', 'Isti Amelia Isnaeni', 'Must Have', '2024-09-25', '2024-09-25', 3);

INSERT INTO projects (project_id, project_name, project_description) 
VALUES (4, 'Monthly Closing September 2024', 'Monthly Closing September 2024');
