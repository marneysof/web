import cn from 'classnames'
import React from 'react'

import Button from '../button/button'

import * as styles from './dropdown-item.module.css'

export interface DropdownItem {
  title: string
  to: string
  openInNewWindow?: boolean
  description?: string
  className?: string
  onClick: () => void
}

const DropdownItem = ({
  className,
  to,
  title,
  openInNewWindow = false,
  description,
  onClick
}: DropdownItem) => (
  <div className={cn(styles.dropdownItem, className && className)}>
    <Button
      to={to}
      style={'navigation'}
      openInNewWindow={openInNewWindow}
      sideEffect={onClick}
    >
      <div>
        {title}
        {description && (
          <p
            className={cn(
              styles.dropdownDescription,
              'font-p-smaller',
              'is-mute-text'
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Button>
  </div>
)

export default DropdownItem
