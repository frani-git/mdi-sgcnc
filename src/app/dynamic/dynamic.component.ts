import { Component } from "@angular/core";

export abstract class DynamicComponent {
  context: any;
  _id: any;
}

@Component({
  selector: 'dynamic-sample-1',
  template: '<div [id]="_id">Dynamic sample 1 ({{context?.text}})</div>'
})
export class DynamicSample1Component extends DynamicComponent {}

@Component({
  selector: 'unknown-component',
  template: `<div>지정된 컴포넌트가 없습니다. 컴포넌트를 지정해주시기 바랍니다.</div>`
})
export class UnknownDynamicComponent {}
