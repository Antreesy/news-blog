import React, { useEffect, useState } from 'react';

import c from './dropdown.module.scss'

export const Dropdown = (props) => {
  const { children, isOpen} = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])

  const handleOpen = () => {
    if (isOpen === undefined) setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={c.container}>
      <div onClick = {handleOpen}>
        <button className={c.button}>МЕНЮ</button>
      </div>
      {isDropdownOpen && (
        <div className={c.listContainer}>
          <div className={c.listWrapper} onClick={() => setIsDropdownOpen(false)}>
            <ul className={c.list}>
              {children}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
