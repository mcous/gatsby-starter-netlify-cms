// @flow
import * as React from 'react'

type Props = {children: React.Node}

const STYLE = 'mt4 mb3 tc f4 normal lh-title'

export default function CenteredMeasure(props: Props) {
  return <h3 className={STYLE}>{props.children}</h3>
}
