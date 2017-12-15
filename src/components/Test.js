import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui-icons/Menu';
import MenuItem from 'material-ui-icons/Menu';


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const ListExampleMessages = () => (
    <div>
        <List>
            <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText="Brendan Lim"
                secondaryText={
                    <p>
                        <span style={{color: 'F123533'}}>Brunch this weekend?</span><br/>
                        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true}/>
            <ListItem
                leftAvatar={<Avatar src="images/kolage-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText="me, Scott, Jennifer"
                secondaryText={
                    <p>
                        <span style={{color: '#ff6434'}}>Summer BBQ</span><br/>
                        Wish I could come, but I&apos;m out of town this weekend.
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true}/>
            <ListItem
                leftAvatar={<Avatar src="images/uxceo-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText="Grace Ng"
                secondaryText={
                    <p>
                        <span style={{color: '#ff6434'}}>Oui oui</span><br/>
                        Do you have any Paris recs? Have you ever been?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true}/>
            <ListItem
                leftAvatar={<Avatar src="images/kerem-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText="Kerem Suer"
                secondaryText={
                    <p>
                        <span style={{color: '#ff6434'}}>Birthday gift</span><br/>
                        Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true}/>
            <ListItem
                leftAvatar={<Avatar src="images/raquelromanp-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText="Raquel Parrado"
                secondaryText={
                    <p>
                        <span style={{color: '#ff6434'}}>Recipe to try</span><br/>
                        We should eat this: grated squash. Corn and tomatillo tacos.
                    </p>
                }
                secondaryTextLines={2}
            />
        </List>
    </div>
);

export default ListExampleMessages;