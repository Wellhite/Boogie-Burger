import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3020/graphql', // Remplacez l'URL par l'URL de votre serveur GraphQL
});

const authLink = setContext((_, { headers }) => {
  // Récupérez le jeton d'accès JWT à partir du stockage local ou d'un autre emplacement
  const accessToken = localStorage.getItem('accessToken');

  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
