import { EventEmitter } from "events";
// import Object from "object-assign";
import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  signinUserId: null,
  navItems: getSidebarNavItems()
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSignin = this.toggleSignin.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case Constants.SIGNINUSER:
        this.toggleSignin(payload);
        break;
      default:
        return _store;
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  toggleSignin(payload) {
    _store.signinUserId = payload
    console.log('Store... signin_user_ID: ', payload, _store)
    this.emit(Constants.SIGNIN);
    // return Object.assign(_store, {signinUserId: payload})
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSigninUserId() {
    return _store.signinUserId;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
