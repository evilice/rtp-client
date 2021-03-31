import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Paper, TextField, Button, makeStyles } from '@material-ui/core';
import { useRegistrationFormState, IRegistrationFormState } from './registration-state';
import { Row } from '../../partials/row';

const useStyles = makeStyles(({ palette }) => ({
  error: {
    color: palette.error.main
  }
}));

const fields: Array<{ name: keyof(IRegistrationFormState), placeholder: string, type?: string }> = [
  { name: 'name', placeholder: 'Имя пользователя' },
  { name: 'password', placeholder: 'Пароль', type: 'password' },
  { name: 'rePassword', placeholder: 'Подтвердить пароль', type: 'password' }
];

export const RegistrationPage:FC = () => {
  const cls = useStyles();
  const {
    state,
    error,
    submitHandler,
    changeStateHandler
  } = useRegistrationFormState();

  return (
    <Paper>
      {
        fields.map((field) => (
          <Row key={ field.name }>
            <TextField
              fullWidth
              { ...field }
              variant="outlined"
              value={ state[field.name] }
              onChange={ changeStateHandler } />
          </Row>
        ))
      }
      <Row>
        {
          error && (
            <div className={ cls.error }>
              { error === 2 ? 'Пользователь с таким именем уже зарегистрирован' : 'Не соответствие паролей' }
            </div>
          )
        }
      </Row>
      <Row>
        <Button onClick={ submitHandler } variant="contained" color="primary">Зарегистрироваться</Button>
      </Row>
      <Row>
        <Link to="/signin">у меня есть аккаунт</Link>
      </Row>
    </Paper>
  );
};