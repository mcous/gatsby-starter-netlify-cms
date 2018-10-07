// @flow
import * as React from 'react'
import {AboutPageTemplate} from '../../templates/AboutPage'

type Props = {
  entry: {getIn: (Array<string>) => string},
  widgetFor: string => string,
}

export default function AboutPagePreview(props: Props) {
  const {entry, widgetFor} = props
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}
