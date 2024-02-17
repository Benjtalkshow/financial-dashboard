import { HambergerMenu, NotificationBing, SearchNormal1 } from "iconsax-react";
import { SidebarContext } from "../../context/SidebarContext";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";


const iconColor = "#fe6c00";
const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <HambergerMenu size={26} color="#fe6c00" />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <SearchNormal1 size="26" color={iconColor}/>
            </button>
            <button className="notification-btn content-top-btn">
                <NotificationBing size="32" color={iconColor}/>
            </button>
        </div>
    </div>
  )
}

export default ContentTop