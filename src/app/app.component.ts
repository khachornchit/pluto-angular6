import {Component} from '@angular/core';

function logMember(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Arguments', args, ' were passed in this function');
        const result = original.apply(this, args);
        console.log('The result of the function is ', result);
        return result;
    };

    return descriptor;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Pluto Solutions';

    constructor() {
        console.log('Start app with a Simple Method ' + this.aSimpleMethod(5, 6));
    }

    @logMember
    aSimpleMethod(a, b) {
        return a * b;
    }
}
