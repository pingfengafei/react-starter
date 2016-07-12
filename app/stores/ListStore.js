/**
 * Created by zad on 16/6/21.
 */
import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll() {
        return this.items;
    },

    addNewItemHandler(text) {
        this.items.push(text);
    },

    emitChange() {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register((action)=> {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
        // no op
    }
});

export default ListStore;