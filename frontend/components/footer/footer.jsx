import React from 'react';
import { AiFillLinkedin, AiFillGithub, FaAngellist, BsPersonSquare, AiOutlineCopyright } from 'react-icons/all';

export default () => {
  return (
    <footer>
      <div className="footer-items-container">

        <div className="footer-item">
          <ul>
            <li><h1>About Me</h1></li>
            <li>
              <a href="https://www.linkedin.com/in/adrian-zaragoza/" target="_blank"><AiFillLinkedin />LinkedIn</a>
            </li>
            <li>
              <a href="https://angel.co/u/adrian-zaragoza" target="_blank"><FaAngellist />AngelList</a>
            </li>
            <li>
              <a href="https://www.adrianlzaragoza.com/" target="_blank"><BsPersonSquare />Personal Site</a>
            </li>
            <li>
              <a href="https://github.com/adrian-zaragoza" target="_blank"><AiFillGithub />Github</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <h1><AiOutlineCopyright/> 2021 pridefulb&b, Inc. All rights reserved</h1>
        </div>
      </div>
    </footer>
  )
}