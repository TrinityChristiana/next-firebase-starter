/* eslint-disable react/prop-types */
import Loading from '../components/Loading';
import Signin from '../components/Signin';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AuthConsumer, AuthProvider } from '../utils/context/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthConsumer>
        {({ user, userLoading }) => {
          if (userLoading) {
            return <Loading />;
          }

          if (user) {
            return (
              <div className="container">
                <Component {...pageProps} />
              </div>
            );
          }

          return <Signin />;
        }}
      </AuthConsumer>
    </AuthProvider>
  );
}

export default MyApp;
