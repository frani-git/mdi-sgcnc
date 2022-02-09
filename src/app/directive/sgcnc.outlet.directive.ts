import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, ViewContainerRef } from "@angular/core";
import { ChildrenOutletContexts, RouterOutlet } from "@angular/router";

@Directive({
    selector: 'sgcnc-router-outlet',
    exportAs: 'outlet'
})
export class SgcncOutletDirective implements OnInit, AfterViewInit, OnDestroy {
    public outlet: RouterOutlet;

    // 2021.01.27 Celestail changeEvent new Eventmitter
    @Output() 
    activate: EventEmitter<any> = new EventEmitter<any>();
    @Input() 
    public name: string;

    constructor(
        private parentContexts: ChildrenOutletContexts,
        private location: ViewContainerRef,
        private resolver: ComponentFactoryResolver, 
        private changeDetector: ChangeDetectorRef,
    ) {}
    ngOnInit() {
      this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
      this.outlet.activateEvents = this.activate;
      this.outlet.ngOnInit();
    }
    
    // 2022.01.27 Celestial Change Detection 
    ngAfterViewInit() {
      this.changeDetector.detectChanges();
    }

    ngOnDestroy() {
      if(this.outlet) {
        this.outlet.ngOnDestroy();
      }
        
    }
}
