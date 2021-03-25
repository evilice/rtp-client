import { FC, useState, useMemo, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { createContainer } from 'unstated-next';

/**
 * @TODO: Я йух его знаю, как отдельно обработать дисконнект
 */

const DisconnectState = () => {
  const [disconnect, setDisconnect] = useState<boolean>(true);

  useEffect(() => {
    const resp = axios.interceptors.response.use((response: AxiosResponse) => {
      // console.log({ response });
      return response;
    });
    return () => {
      axios.interceptors.response.eject(resp);
    };
  }, [setDisconnect])

  return useMemo(() => ({ disconnect }), [disconnect]);
};

const DisconnectContainer = createContainer(DisconnectState);

export const DisconnectProvider: FC = ({ children }) => {
  return (
    <DisconnectContainer.Provider>
      { children }
    </DisconnectContainer.Provider>
  );
};

export const useDisconnect = DisconnectContainer.useContainer;