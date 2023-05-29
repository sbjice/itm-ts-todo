import { Button, ButtonProps } from '@mui/material'

export const FilterButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      sx={{
        width: '33.3%'
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}