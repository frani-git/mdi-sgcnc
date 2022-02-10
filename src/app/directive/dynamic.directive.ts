
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[dynamic-ref1]"
})
export class DynamicDirective1 {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

@Directive({
    selector: "[dynamic-ref2]"
})
export class DynamicDirective2 {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

@Directive({
    selector: "[dynamic-ref3]"
})
export class DynamicDirective3 {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

@Directive({
    selector: "[dynamic-ref4]"
})
export class DynamicDirective4 {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

@Directive({
    selector: "[dynamic-ref5]"
})
export class DynamicDirective5 {
    constructor(public viewContainerRef: ViewContainerRef) {}
}