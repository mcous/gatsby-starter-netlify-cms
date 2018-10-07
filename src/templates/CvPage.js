// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HtmlContent} from '../components/Content'
import CenteredHeading from '../components/CenteredHeading'

type Entry = {
  name: string,
  location: string,
  date: string,
  details?: Array<string>,
}

type Section = {
  title: string,
  entries: Array<Entry>,
}

type CvPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        sections: Array<Section>,
      },
    },
  },
}

type CvTemplateProps = {
  title: string,
  sections: Array<Section>,
  contentComponent?: ?React.ElementType,
}

export const cvPageQuery = graphql`
  query CvPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        sections {
          title
          entries {
            name
            location
            date
            details
          }
        }
      }
    }
  }
`

export default function CvPage(props: CvPageProps) {
  const {title, sections} = props.data.markdownRemark.frontmatter

  return (
    <CvPageTemplate
      contentComponent={HtmlContent}
      title={title}
      sections={sections}
    />
  )
}

export function CvPageTemplate(props: CvTemplateProps) {
  const {title, sections, contentComponent} = props
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Helmet title={title} />
      {sections.map(s => (
        <CvSection key={s.title} {...s} />
      ))}
    </Layout>
  )
}

function CvSection(props: Section) {
  const {title, entries} = props

  return (
    <section>
      <CenteredHeading>{title}</CenteredHeading>
      <ul className="list mw6 mv0 center ph4 pl0 f5 lh-copy">
        {entries.map(e => (
          <CvEntry key={e.name} {...e} />
        ))}
      </ul>
    </section>
  )
}

function CvEntry(props: Entry) {
  const {name, location, date, details} = props

  return (
    <li>
      <div className="cf">
        <p className="mv0 fl">{name}</p>
        <p className="mv0 fr f6">{date}</p>
      </div>
      <p className="mv0 f6">{location}</p>
      {details && (
        <ul className="list pl0 f7">
          {details.map(d => (
            <li>
              <p className="mv0">{d}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
