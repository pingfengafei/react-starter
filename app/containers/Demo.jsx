import React from 'react';
import {Link} from 'react-router';
import {Icon} from 'react-fa';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Ghettohub Issues</h1>

                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <AppBar
                        title="Title"
                        titleStyle={{'textAlign':'center','cursor':'pointer'}}
                        iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                        iconElementRight={
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>}
                    />
                </MuiThemeProvider>

                <ul role="nav">
                    <li>
                        <Link to="/async" activeClassName="active123"><Icon name="home" fixedWidth/>async</Link>
                    </li>
                    <li>
                        <Link to="/count" activeClassName="active123"><Icon name="book" fixedWidth/>count</Link>
                    </li>
                    <li>
                        <Link to="/redux" activeClassName="active123"><Icon name="pencil" fixedWidth/>Redux</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
