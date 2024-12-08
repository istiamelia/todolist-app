export interface Todo {
        tasks: {
          task_id: string;
          task_name: string;
          task_description: string;
          task_asignee: string;
          task_status: string;
          task_priority: string;
          start_date: Date;
          due_date: Date;
          deleted_date: Date;
          created_date: Date;
          updated_date: Date;
          project_id: number;
          project_name: string;
          project_description: string;
          created_at: Date;
        }[];
        projects: {
          project_id: number;
          project_name: string;
          project_description: string;
          created_at: Date;
        }[];
}