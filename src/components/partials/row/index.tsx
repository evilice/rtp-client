import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing }) => ({
  row: {
    padding: spacing()
  },
  center: {
    textAlign: 'center'
  }
}));

interface IRowProps {
  centred?: boolean;
};

export const Row:FC<IRowProps> = ({ children, centred }) => {
  const cls = useStyles();
  const classes = clsx(
    cls.row,
    { [cls.center]: centred }
  );

  return (
    <div className={ classes }>
      { children }
    </div>
  )
};