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

    doCreate(text) {
        this.items.push(text);
        this.emitCreateItem();
    },

    emitCreateItem() {
        this.emit('ADD_NEW_ITEM');
    },

    addCreateItemListener(callback) {
        this.on('ADD_NEW_ITEM', callback);
    },

    removeCreateItemListener(callback) {
        this.removeListener('ADD_NEW_ITEM', callback);
    }
});

AppDispatcher.register((action)=> {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.doCreate(action.text);
            break;
        default:
        // no op
    }
});

export default ListStore;