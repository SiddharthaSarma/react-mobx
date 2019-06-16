import { observable } from 'mobx';

export const appState: any = observable({
  count: 0
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};
