// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Main from './Main'
import BigNav from '../components/BigNav'
import './style.css'

type Props = {children: React.Node}

type QueryData = {
  site: {
    siteMetadata: {
      title: string,
      subtitle: string,
      googleSiteVerification: string,
    },
  },
}

export default function TemplateWrapper(props: Props) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              subtitle
              googleSiteVerification
            }
          }
        }
      `}
      render={(data: QueryData) => {
        const {title, subtitle} = data.site.siteMetadata
        return (
          <>
            <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
              <meta
                name="google-site-verification"
                content={data.site.siteMetadata.googleSiteVerification}
              />
            </Helmet>
            <Main>
              <BigNav title={title} subtitle={subtitle} />
              {props.children}
            </Main>
          </>
        )
      }}
    />
  )
}
