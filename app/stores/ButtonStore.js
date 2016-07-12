/**
 * Created by zad on 16/6/21.
 */
import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll() {
        return this.items;
    },

    doCreate(text) {
        this.items.push(text);
        this.emitCreateItem();
    },

    emitCreateItem() {
        this.emit('CREATE_NEW_ITEM');
    },

    addCreateItemListener(callback) {
        this.on('CREATE_NEW_ITEM', callback);
    },

    removeCreateItemListener(callback) {
        this.removeListener('CREATE_NEW_ITEM', callback);
    }
});

AppDispatcher.register((action)=> {
    switch (action.actionType) {
        case 'CREATE_NEW_ITEM':
            ButtonStore.doCreate(action.text);
            break;
        default:
        // no op
    }
});

export default ButtonStore;