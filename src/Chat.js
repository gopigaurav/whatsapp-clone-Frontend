import React from 'react';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {MoreVert} from '@material-ui/icons';
import './Chat.css';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"


//(message.timestamp?.toDate())
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-preview.jpg" />
                <div className="chat__headerInfo">
                    <h3>Test room</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerRight"> 
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                     <MoreVert/>
                </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>

                <p className="chat__message">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>

                <p className="chat__message chat__receiver">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
                <p className="chat__message chat__receiver">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
                <p className="chat__message chat__receiver">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
                <p className="chat__message chat__receiver">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
                <p className="chat__message chat__receiver">
                <span className="chat__name">
                    gopi
                </span>
                This is message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
                <p className="chat__message">
                <span className="chat__name">
                    gopi
                </span>
                This is just a frontend implementation of whatsapp | if u wanna see the full whatsapp-clone visit my Mern-whatsapp-clone repository.Thank you

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
                </p>
            </div>

            <div className ="chat__footer">
                <InsertEmotionIcon/>
                <form>
                    <input placeholder="Type a message"
                    type="text"/>
                    <button  type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
