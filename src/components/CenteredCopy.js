// @flow
import * as React from 'react'

type Props = {children: React.Node}

const STYLE = 'center ph4 measure f5 lh-copy'

export default function CenteredMeasure(props: Props) {
  return <div className={STYLE}>{props.children}</div>
}
