import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkTheme } from './redux/actions';

const DarkThemeToggle = () => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector((state) => state.darkTheme);

  return (
    <label>
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch(toggleDarkTheme())}
      />
      Dark Theme
    </label>
  );
};

export default DarkThemeToggle;
