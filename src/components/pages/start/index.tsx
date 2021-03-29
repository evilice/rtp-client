import { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Paper, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  infomationBox: {
    margin: spacing()
  }
}));

export const StartPage: FC = () => {
  const cls = useStyles();
  const history = useHistory();

  const clickHandler = useCallback(() => {
    history.push('/signin');
  }, [history]);

  return (
    <Paper className={ cls.infomationBox }>
      <h3>Добро пожаловать!</h3>
      <div>
        Или посторонним вход воспрещён. Много какого-то текста, вполне возможно, даже ни кому не интересного. Но что-то написать надо, это же страница приветствия.
      </div>
      <div>
        <Button variant="contained" onClick={ clickHandler }>Выполнить вход</Button>
      </div>
      <div>
        <Link to="/registration">зарегистрироваться</Link>
      </div>
    </Paper>
  );
};