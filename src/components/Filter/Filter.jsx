import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.labelFilter}>
        Filter
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};

