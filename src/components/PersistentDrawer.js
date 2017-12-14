/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import StarBorder from 'material-ui-icons/StarBorder';
import EnchancedTable from "./DebtList";
import CheckboxListSecondary from "./FriendsList";
import PaperSheet from './Paper';
import FormLogin from "./FormLogin";
import FormRegistration from "./FormRegistration";




const drawerWidth = 240;

const styles = theme => ({
    root: {
        float: 'left',
        width: '100%',
        height: 876,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',

    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',

    },
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 50,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    button:{
        float: 'right',
    },
});


class MiniDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };


    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>

                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Mini variant drawer
                            </Typography>
                            <FormLogin/>
                            <FormRegistration/>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        type="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                                </IconButton>
                            </div>
                            <Divider/>
                            <List className={classes.list}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <SendIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Sent mail"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Drafts"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Inbox"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred"/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred"/>
                                </ListItem><ListItem button>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="Starred"/>
                            </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred"/>
                                </ListItem>

                            </List>
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        <Typography type="body1" noWrap>
                            <EnchancedTable/>
                            <PaperSheet/>
                            <CheckboxListSecondary/>
                        </Typography>
                    </main>
                </div>
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MiniDrawer);