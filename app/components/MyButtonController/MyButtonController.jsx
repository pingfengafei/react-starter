import React from 'react';
import './MyButtonController.less';
import ListStore from '../../stores/ListStore';
import ButtonAction from '../../actions/ButtonAction';
import MyButton from '../MyButton/MyButton';

export default class MyButtonController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: ListStore.getAll()};
        this.createNewItem = this.createNewItem.bind(this);
        this._onCreate = this._onCreate.bind(this);
    }

    componentDidMount() {
        ListStore.addCreateItemListener(this._onCreate);
    }

    componentWillUnmount() {
        ListStore.removeCreateItemListener(this._onCreate);
    }

    _onCreate() {
        this.setState({
            items: ListStore.getAll()
        });
    }

    createNewItem() {
        ButtonAction.addNewItem('new item');
    }

    render() {
        return (
            <MyButton items={this.state.items} onClick={this.createNewItem}/>
        );
    }
}