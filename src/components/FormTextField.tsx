import { StandardTextFieldProps, TextField } from '@mui/material';

interface MyTextFieldProps extends StandardTextFieldProps {
  onChangeHandler: (val: string) => void;
  inputContent: string;
}

export const FormTextField = ({onChangeHandler, inputContent}: MyTextFieldProps): JSX.Element | null => {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
  }

  return (
    <TextField
      label="New Todo"
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
      value={inputContent}
      onChange={changeHandler}
    />
  )
}