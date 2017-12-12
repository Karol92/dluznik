import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    root: {
        float: 'right',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 150,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class CheckboxListSecondary extends React.Component {
    state = {
        checked: [1],
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
                    {[0, 1, 2, 3].map(value => (
                        <ListItem key={value} dense button className={classes.listItem}>
                            <Avatar alt="Remy Sharp" src="noimg.png" />
                            <ListItemText primary={`Line item ${value + 1}`} />
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