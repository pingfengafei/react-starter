import React from 'react';
import './MyButtonController.less';
import ButtonStore from '../../stores/ButtonStore';
import ButtonAction from '../../actions/ButtonAction';
import MyButton from '../MyButton/MyButton';

export default class MyButtonController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: ButtonStore.getAll()};
        this._createNewItem = this._createNewItem.bind(this);
        this._onCreate = this._onCreate.bind(this);
    }

    componentDidMount() {
        ButtonStore.addCreateItemListener(this._onCreate);
    }

    componentWillUnmount() {
        ButtonStore.removeCreateItemListener(this._onCreate);
    }

    _onCreate() {
        this.setState({
            items: ButtonStore.getAll()
        });
    }

    _createNewItem() {
        ButtonAction.createNewItem('new item');
    }

    render() {
        return (
            <MyButton items={this.state.items} onClick={this._createNewItem}/>
        );
    }
}