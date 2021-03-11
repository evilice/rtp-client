import { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  verticalLayout: {
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100vh',
    left: 0,
    top: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

export const VerticalCenterLayout:FC = memo(({ children }) => {
  const cls = useStyles();

  return (
    <div className={ cls.verticalLayout }>
      { children }
    </div>
  );
});