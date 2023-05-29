import { TextField } from '@mui/material';

interface ITodoTextFieldProps {
  setNewTodoVal: (val: string) => void;
  newTodoVal: string;
}

export const TodoTextField: React.FC<ITodoTextFieldProps> = ({newTodoVal, setNewTodoVal}) => {

  const changeHandler =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTodoVal(e.target.value);
  }
  
  return (
    <TextField
          label="new value"
          variant="outlined"
          sx={{
            label: {
              color: 'gray',
            },
            width: '90%',
            input: {
              color: 'white',
            },
          }}
          value={newTodoVal}
          onChange={changeHandler}
        />
  )
}