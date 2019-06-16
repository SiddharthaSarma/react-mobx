import { action, observable } from 'mobx';

export default class Counter {
  @observable count = 0;
  @action
  increment() {
    this.count++;
  }
  @action
  decrement() {
    this.count--;
  }
}
