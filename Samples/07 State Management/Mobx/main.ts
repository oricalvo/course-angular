import {observable} from "mobx";

class Todo {
    id = Math.random();
    @observable title: string = "";
    @observable finished: boolean = false;
}
