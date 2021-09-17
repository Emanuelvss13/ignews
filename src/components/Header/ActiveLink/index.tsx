import React, { cloneElement, ReactElement } from 'react'
import Link, {LinkProps} from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface ActiveLinkProsps extends LinkProps {
  activeClassName: string;
  children: ReactElement
}

export default function ActiveLink({activeClassName, children, ...props}: ActiveLinkProsps) {
  const {asPath} = useRouter()

  const className = asPath === props.href ? activeClassName : ''

  return (
    <Link {...props}>
      {cloneElement(children,{
        className
      })}
    </Link>
  )
}
