import React from 'react';
import AttributesContainer from './components/Attributes/AttributesContainer';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  return (
    //@ts-ignore
    <ApolloProvider client={client}>
      <AttributesContainer />
    </ApolloProvider>
  );
}

export default App;