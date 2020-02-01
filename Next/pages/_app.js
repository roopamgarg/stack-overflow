import { Provider } from 'react-redux';
import App from 'next/app'
import withRedux from 'next-redux-wrapper';
import initStore from '../redux/store';
import Nav from '../components/Nav/Nav'
import '../styles/antd.scss';

  class MyApp extends App {
    static async getInitialProps({ Component, ctx, store }) {
      
      let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, store }
    }

    render() {
        
      const { Component, pageProps, store } = this.props;
      return (
    
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
    
      );
    }
  }


export default withRedux(initStore)(MyApp)