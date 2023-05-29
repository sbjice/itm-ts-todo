import { Button } from '@mui/material';
import styles from './styles.module.css';
import { useState } from 'react';
import { FormTextField } from '../components/FormTextField';

interface ITodoFormProps {
  todoAddHandler: (task: string) => void;
}

export const TodoForm = ({ todoAddHandler }: ITodoFormProps): JSX.Element | null => {
  const [inputContent, setInputContent] = useState('');

  const submiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputContent !== '') {
      todoAddHandler(inputContent);
      setInputContent('');
    }
  }

  return (
    <form className={styles['todo-form']} onSubmit={submiHandler}>
      <FormTextField
        inputContent={inputContent}
        onChangeHandler={setInputContent}
      />
      <Button
        type='submit'>
        Add
      </Button>
    </form>
  )
};