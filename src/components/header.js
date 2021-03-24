import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>MUSHFI CHOWDHURY</div>
        <nav>
          <ul>
            <li>
              <a href='/'>about me</a>
            </li>
            <li>
              <a href='/'>projects</a>
            </li>
            <li>
              <a href='/'>resume</a>
            </li>
            <li className='btn'>
              <a href='/'>contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
