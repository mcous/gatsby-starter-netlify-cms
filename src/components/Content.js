// @flow
import * as React from 'react'

type Props = {
  content: string,
  className: string,
}

export default function Content(props: Props) {
  const {content, className} = props

  return <div className={className}>{content}</div>
}

export function HtmlContent(props: Props) {
  const {content, className} = props

  return (
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  )
}
