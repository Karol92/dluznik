import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import AddIcon from 'material-ui-icons/Add';

const styles = {
    root: {
        width: '100%',
        backgroundColor: '#757de8',
    },
};

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon/>}/>
                <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon/>}/>
                <BottomNavigationButton label="Add" value="add" icon={<AddIcon/>} title="Filter list"/>
            </BottomNavigation>

        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);