import React, { FC, useCallback, useState, useEffect } from 'react';
import { RouteComponentProps, useNavigate } from '@reach/router';
import { makeStyles, Button, TextField, Paper } from '@material-ui/core';
import useAxios from 'axios-hooks';

import { Row } from '../../partials/row';
import { InputChangeEvent } from '../../../types';
import { VerticalCenterLayout } from '../../layouts/vertical-center';

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    maxWidth: 450,
    padding: spacing(2)
  }
}));

export const SigninPage:FC<RouteComponentProps> = () => {
  const cls = useStyles();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [{ data, loading, error }, execute] = useAxios({
    method: 'POST',
    url: '/auth/login'
  }, { manual: true });

  const changeUsername = useCallback((e: InputChangeEvent) => {
    setUsername(e.currentTarget.value);
  }, [setUsername]);
  const changePassword = useCallback((e: InputChangeEvent) => {
    setPassword(e.currentTarget.value);
  }, [setPassword]);

  const clearForm = useCallback(() => {
    setUsername('');
    setPassword('');
  }, [setUsername, setPassword]);

  const sigin = () => {
    execute({ data: { username, password }});
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.access_token);
      navigate('/main');
    }
  }, [data, error, navigate]);

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
              value={ username }
              onChange={ changeUsername }
              fullWidth />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              placeholder="password"
              value={ password }
              onChange={ changePassword }
              type="password"
              fullWidth />
          </Row>
          <Row centred={ true }>
            <Button variant="contained" color='primary' onClick={ sigin } disabled={ loading }>Sign in</Button>
          </Row>
        </Paper>
      </div>
    </VerticalCenterLayout>
  );
};