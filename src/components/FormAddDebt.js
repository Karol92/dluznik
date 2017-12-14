import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import LibraryAddIcon from 'material-ui-icons/LibraryAdd';
import {ListItem, ListItemIcon, ListItemText} from "material-ui";
import MenuItem from 'material-ui/Menu/MenuItem';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'PLN',
        label: 'zł',
    }
];


export default class FormAddDebt extends React.Component {
    state = {
        open: false,
        currency: 'PLN',
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {


        return (
            <div>
                <ListItem button onClick={this.handleClickOpen} inset primary="Starred">
                    <ListItemIcon>
                        <LibraryAddIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary="Add"/>
                </ListItem>

                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle>Add Debt:</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name:"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="payment"
                            label="Payment:"
                            type="number"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            id="select-currency"
                            select
                            label="Select"
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            margin="normal"
                        >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="date"
                            label="Date:"
                            type="date"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Add Debt
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}