import React, { memo, useCallback, useState } from 'react';
import styles from './todo.module.css'
import { Button, Checkbox } from '@mui/material';
import { TodoTextField } from '../components/TodoTextField';

interface TodoComponent {
  id: string;
  title: string;
  completed: boolean;
  handleUpdate: (id: string, task: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}

const Todo = ({ id, title, completed, handleUpdate, handleDelete }: TodoComponent): JSX.Element | null => {
  const [editMode, setEditMode] = useState(false);
  const [newTodoVal, setNewTodoVal] = useState(title);
  const [todoCompleted, setTodoCompleted] = useState(completed);

  const handleEdit = useCallback(() => {
    setEditMode(true);
  }, []);

  const handleSave = useCallback(() => {
    setEditMode(false);
    handleUpdate(id, newTodoVal, todoCompleted);
  }, [handleUpdate, id, newTodoVal, todoCompleted]);

  const handleTodoDelete = useCallback(() => {
    handleDelete(id);
  }, [handleDelete, id]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setTodoCompleted(checked);
  }, []);

  return (
    <div className={styles['todo']}>
      <div className={styles['todo-content']}>
        <Checkbox
          checked={todoCompleted}
          disabled={!editMode}
          onChange={handleChange}
        />
        {
          editMode
            ? <TodoTextField
              newTodoVal={newTodoVal}
              setNewTodoVal={setNewTodoVal}
            />
            : <p>{title}</p>
        }
      </div>
      <div className={styles['todo-controls']}>
        {
          editMode
            ? <Button onClick={handleSave}>Save</Button>
            : <Button onClick={handleEdit}>Change</Button>
        }
        <Button onClick={handleTodoDelete}>Delete</Button>
      </div>
    </div>
  )
}

export const MemoizedTodo = memo(Todo);