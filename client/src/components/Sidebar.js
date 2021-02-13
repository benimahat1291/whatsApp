import React from 'react'
import "./Sidebar.css"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from "./SidebarChat"


const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/69019321?s=460&u=74a1a434940945b562698fca7175c461eb73d7c7&v=4"/>
                <div className="sidebar__headerIcons">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>



        </div>
    )
}

export default Sidebar
