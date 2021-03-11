import { FC } from 'react';
import { makeStyles } from '@material-ui/core';

import { VerticalCenterLayout } from '../vertical-center';

const useStyles = makeStyles(() => ({
  // loadingBox: {
  //   position: 'absolute',
  //   zIndex: 1000,
  //   width: '100%',
  //   height: '100vh',
  //   left: 0,
  //   top: 0,

  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },
  loadingText: {
    left: 0,
    top: -80,
    zIndex: 1001,
    position: 'relative',
    textAlign: 'center',
    fontSize: '0.8em'
  }
}));

export const LoadingLayout:FC = () => {
  const cls = useStyles();
  return (
    <VerticalCenterLayout>
      <div>
        <div className="spinner"></div>
        <div className={ cls.loadingText }>
          LOADING...
        </div>
      </div>
    </VerticalCenterLayout>
  );
};