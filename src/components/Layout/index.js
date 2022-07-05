import React from 'react';
import { Helmet } from 'react-helmet';
import { TitlePage, Div, Subtitle } from './style';
const Layout = ({children, title, subtitle}) => {
  return (
    <>
      <Helmet>
        {title && <title> {title} | Petgram 🐈</title>}
        {subtitle && <meta name='description' content={subtitle}/>}
      </Helmet>
      <Div>
        {title && <TitlePage>{title}</TitlePage>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  );
}

export  {Layout};
