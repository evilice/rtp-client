import { FC, useCallback, useState } from 'react';
import { makeStyles, Button, TextField, Paper } from '@material-ui/core';

import { Row } from '../../partials/row';
import { InputChangeEvent } from '../../../types';
import { VerticalCenterLayout } from '../../layouts/vertical-center';
import { useAuthUser } from '../../../contexts/AuthUser';

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: 450,
    minWidth: 350,
    margin: '0px auto'
  }
}));

interface FormState {
  username: string;
  password: string;
};
const initAuthFormState: FormState = Object.freeze({ username: '', password: '' });

export const SigninPage:FC = () => {
  const cls = useStyles();
  const { signin } = useAuthUser();

  const [form, setFormState] = useState<FormState>(initAuthFormState);
  const chengeHandler = useCallback(({ target: { name, value }}: InputChangeEvent) => {
     setFormState({ ...form, [name]: value });
  }, [form, setFormState]);

  const submitHandler = useCallback(() => {
    signin(form.username, form.password);
  }, [signin, form]);

  return (
    <VerticalCenterLayout>
      <div className={ cls.form }>
        <Paper>
          <Row centred={ true }>
            <h3>AUTHORIZATION FORM</h3>
          </Row>
          <Row>
            <TextField
              variant="outlined"
              placeholder="username"
              value={ form.username }
              name="username"
              onChange={ chengeHandler }
              fullWidth />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              placeholder="password"
              value={ form.password }
              name="password"
              onChange={ chengeHandler }
              type="password"
              fullWidth />
          </Row>
          <Row centred={ true }>
            <Button variant="contained" color='primary' onClick={ submitHandler } disabled={ false }>Sign in</Button>
          </Row>
        </Paper>
      </div>
    </VerticalCenterLayout>
  );
};