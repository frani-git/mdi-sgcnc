import { ComponentFactoryResolver, Injectable, ComponentRef } from "@angular/core";

@Injectable()
export class ComponentFactoryService {
    private componentRef: ComponentRef<{}>;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }
    
    createComponent(componentInstance: any, viewContainer: any): ComponentRef<any> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentInstance);
        const viewContainerRef = viewContainer.viewContainerRef;

        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        return this.componentRef;
    }
    
    destroyComponent() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}