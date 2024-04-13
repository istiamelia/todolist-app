CREATE TABLE tasks (
    id UUID NOT NULL,
    title VARCHAR(255),
    completed BOOLEAN,
    deleted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL
)