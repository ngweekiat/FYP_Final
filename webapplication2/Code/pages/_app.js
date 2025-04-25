import Layout from "../components/Layout";
import "../styles/globals.css";
import { AuthProvider } from "../utils/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId=[CLIENDID]>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
