import styles from './styles.module.css';
import { FilterButton } from '../components/FilterButton';
import { FilterStates } from '../assets/enums/filterStates';

interface ITodosFilterProps {
  setTodosFilter: (state: FilterStates) => void;
}

export const TodoFilters: React.FC<ITodosFilterProps> = ({setTodosFilter}) => {

  const showAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodosFilter(FilterStates.NO_FILTER);
  }

  const showIncompleted = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodosFilter(FilterStates.NOT_DONE);
  }

  const showCompleted = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodosFilter(FilterStates.DONE);
  }

  return (
    <div className={styles['todo-filters']}>
      <FilterButton
        onClick={showAll}>
        Show All Tasks
      </FilterButton>
      <FilterButton
        onClick={showIncompleted}>
        Show Active Tasks
      </FilterButton>
      <FilterButton
        onClick={showCompleted}>
        Show Completed Tasks
      </FilterButton>
    </div>
  )
}