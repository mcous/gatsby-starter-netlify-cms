// @flow
// main content container
import * as React from 'react'

const STYLE = 'avenir mw9 pt4 pb3 center'

type Props = {
  children?: React.Node,
}

export default function Main(props: Props) {
  return <main className={STYLE}>{props.children}</main>
}
