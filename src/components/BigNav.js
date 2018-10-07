// @flow
// big nav component
import * as React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'

type Props = {
  title: string,
  subtitle: string,
}

type NavLinkProps = {
  href: string,
  title: string,
  shortTitle?: string,
  last?: boolean,
}

const TITLE_CONTAINER_STYLE = 'mb4'
const TITLE_STYLE = 'mv3 tc lh-title normal f3 f2-ns'
const SUBTITLE_STYLE = 'mv3 tc f5 lh-title'

const NAV_STYLE = 'center ph4 mv4 mw6 mw7-l'
const LIST_STYLE = 'list pl0 tc'

const ITEM_STYLE_BASE = 'dib-ns w-third-ns'
const LINK_STYLE_INACTIVE = 'link pointer db pa3 f4 black dim'
const LINK_STYLE_ACTIVE = 'link db pa3 f4 black o-50'
const LINK_TITLE_STYLE = 'dn di-l'
const LINK_SHORT_TITLE_STYLE = 'di dn-l'

export default function BigNav(props: Props) {
  const {title, subtitle} = props

  return (
    <>
      <div className={TITLE_CONTAINER_STYLE}>
        <h1 className={TITLE_STYLE}>{title}</h1>
        <p className={SUBTITLE_STYLE}>{subtitle}</p>
      </div>
      <nav className={NAV_STYLE}>
        <ul className={LIST_STYLE}>
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/cv" title="Curriculum Vitae" shortTitle="C/V" last />
        </ul>
      </nav>
    </>
  )
}

const getNavLinkProps = linkState => ({
  className: linkState.isCurrent ? LINK_STYLE_ACTIVE : LINK_STYLE_INACTIVE,
})

function NavLink(props: NavLinkProps) {
  const {href, title, last} = props
  const shortTitle = props.shortTitle || title
  const style = cx(ITEM_STYLE_BASE, {'bb br-ns bb-0-ns b--black-30': !last})

  return (
    <li className={style}>
      <Link to={href} title={title} getProps={getNavLinkProps}>
        <span className={LINK_TITLE_STYLE}>{title}</span>
        <span className={LINK_SHORT_TITLE_STYLE}>{shortTitle}</span>
      </Link>
    </li>
  )
}
