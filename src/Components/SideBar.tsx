import twitterLogo from '../Assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User} from 'phosphor-react'
import './SideBar.css'
import { Link, NavLink } from 'react-router-dom'
export default function SideBar(){
  return(
    <aside className="sidebar">
    <img className='logo' src={twitterLogo} alt="logo" />
    <nav className='main-navigation'>
      <NavLink  to="/">
        <House weight='fill'/>
         <span>Home</span>
        </NavLink>
      <Link to="">
        <Hash/>
        <span>Explore</span></Link>
      <Link to="">
        <Bell/>
        <span>Notification</span></Link>
      <Link to="">
        <Envelope/>
        <span>Messages</span></Link>
      <Link to="">
        <BookmarkSimple/>
        <span>Bookmarks</span></Link>
      <Link to="">
        <FileText/>
        <span>Lists</span></Link>
      <Link to="">
        <User/>
        <span>Profile</span></Link>
      <Link to="">
        <DotsThreeCircle/>
        <span>More</span></Link>

    </nav>
      <button className='new-tweet'> 
      <Pencil/>
      <span>Tweet</span>
      </button>
    
     </aside>
  )
}