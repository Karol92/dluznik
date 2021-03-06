import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'react-avatar';


const styles = theme => ({
    root: {
        float: 'right',
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
        elevation: '4',
        zDepth: '5',
    },
    avatar:{
        zDepth: 1,
        circle: true,
    },
});

class CheckboxListSecondary extends React.Component {
    state = {
        checked: [0],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {[0, 1, 2, 3, 4, 5].map(value => (
                        <ListItem key={value} dense button className={classes.listItem}>
                            <Avatar facebookId="100005176692084" size="80" zDepth={1} circle={true}/>
                            <ListItemText primary={`Karol ${value + 1}`}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    onChange={this.handleToggle(value)}
                                    checked={this.state.checked.indexOf(value) !== -1}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

CheckboxListSecondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);