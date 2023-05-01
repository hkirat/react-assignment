import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
function Header() {
  return (
    <div className="header">
        <div className="header-left">
        <img className="header-logo" alt="leetcode-logo"src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"/>
         <Link class="header-links" to="/">Explore</Link>
         <Link class="header-links" to="/problemset/all/">Problems</Link>
         <Link class="header-links" to="/">Interview</Link>
         <Link class="header-links" to="/">Contest</Link>
         <Link class="header-links" to="/">Discuss</Link>
        </div>
        <div className="header-right">
            <NotificationsIcon className="header-right-icons" id="bell-icon"/>
            <div className="question-streak">
                <LocalFireDepartmentOutlinedIcon className="header-right-icons" id="streak" alt="streak"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIGNsYXNzPSJpY29uX18xTWQyIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjE5IDEuNTY0YS43NS43NSAwIDAgMSAuNzI5LjA2OWMyLjEzNyAxLjQ3NSAzLjM3MyAzLjU1OCAzLjk4MSA1LjAwMmwuNjQxLS42NjNhLjc1Ljc1IDAgMCAxIDEuMTcuMTE1YzEuNjMzIDIuNTM2IDEuNjU5IDUuNTM3LjM5MSA3LjcyNS0xLjMyMiAyLjI4Mi0zLjkxNSAyLjY4OC01LjExOSAyLjY4OC0xLjE3NyAwLTMuNjc5LS4yMDMtNS4xMi0yLjY4OC0uNjIzLTEuMDc2LS45NTEtMi4yOS0uODQyLTMuNTI4LjEwOS0xLjI0NS42NTYtMi40NjMgMS42OTctMy41NC42NDYtLjY3IDEuMTI5LTEuNTkyIDEuNDY4LTIuNDkyLjMzNy0uODk1LjUxLTEuNzA5LjU2NC0yLjEwNWEuNzUuNzUgMCAwIDEgLjQ0LS41ODN6bS43ODQgMi4wMjNjLS4xLjM2OC0uMjI2Ljc3My0uMzg1IDEuMTkzLS4zNzUuOTk3LS45NDcgMi4xMy0xLjc5MiAzLjAwNS0uODIxLjg1MS0xLjIwNSAxLjc1NC0xLjI4MiAyLjYzLS4wNzguODg0LjE1MyAxLjc5Mi42NDcgMi42NDVDNi4xNzYgMTQuODEgNy45MjUgMTUgOC45ODMgMTVjMS4wMyAwIDIuOTA5LS4zNjYgMy44MjItMS45NC44MzktMS40NDkuOTctMy40NDYuMTEtNS4zMTVsLS43ODUuODEyYS43NS43NSAwIDAgMS0xLjI2OC0uMzQ1Yy0uMTkyLS43OTQtMS4wNC0yLjk0OC0yLjg4OC00LjYyNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                />
                <span>0</span>
            </div>
            <Link class="header-links" to="/login" id="signin-header">Sign in or Sign up</Link>
        </div>
    </div>
    
  )
}

export default Header