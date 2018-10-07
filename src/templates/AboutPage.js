// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HtmlContent} from '../components/Content'
import CenteredCopy from '../components/CenteredCopy'

type AboutPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        image: string,
      },
      html: string,
    },
  },
}

type AboutTemplateProps = {
  title: string,
  content: string,
  contentComponent?: ?React.ElementType,
}

export default function AboutPage(props: AboutPageProps) {
  const {
    data: {markdownRemark: post},
  } = props

  return (
    <AboutPageTemplate
      contentComponent={HtmlContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export function AboutPageTemplate(props: AboutTemplateProps) {
  const {title, content, contentComponent} = props
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Helmet title={title} />
      <section>
        <CenteredCopy>
          <PageContent className="content" content={content} />
        </CenteredCopy>
      </section>
    </Layout>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`
