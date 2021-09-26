import { Helmet } from 'react-helmet';

const  ContentWrapper = ({ children, title = '', ...rest }) => {
	  return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </>
    );
}

export default ContentWrapper;