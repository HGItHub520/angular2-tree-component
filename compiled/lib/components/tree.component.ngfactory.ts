/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../lib/components/tree.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../../lib/models/tree.model';
import * as import7 from '@angular/core/src/linker/query_list';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../lib/models/tree-dragged-element.model';
import * as import12 from '../../../lib/components/tree-node.component';
import * as import13 from './tree-node.component.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '../../../lib/components/tree-node-drop-slot.component';
import * as import17 from './tree-node-drop-slot.component.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import19 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '@angular/common/src/directives/ng_if';
export class Wrapper_TreeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TreeComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  subscription6:any;
  subscription7:any;
  subscription8:any;
  subscription9:any;
  subscription10:any;
  subscription11:any;
  subscription12:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.TreeComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
    (this.subscription6 && this.subscription6.unsubscribe());
    (this.subscription7 && this.subscription7.unsubscribe());
    (this.subscription8 && this.subscription8.unsubscribe());
    (this.subscription9 && this.subscription9.unsubscribe());
    (this.subscription10 && this.subscription10.unsubscribe());
    (this.subscription11 && this.subscription11.unsubscribe());
    (this.subscription12 && this.subscription12.unsubscribe());
  }
  check_nodes(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.nodes = currValue;
      this._changes['nodes'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_options(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.options = currValue;
      this._changes['options'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_focused(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.focused = currValue;
      this._changes['focused'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'body:keydown')) {
      const pd_sub_0:any = ((<any>this.context.onKeydown($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'body:mousedown')) {
      const pd_sub_1:any = ((<any>this.context.onMousedown($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean,emit6:boolean,emit7:boolean,emit8:boolean,emit9:boolean,emit10:boolean,emit11:boolean,emit12:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.onToggle.subscribe(_eventHandler.bind(view,'onToggle'))); }
    if (emit1) { (this.subscription1 = this.context.onToggleExpanded.subscribe(_eventHandler.bind(view,'onToggleExpanded'))); }
    if (emit2) { (this.subscription2 = this.context.onActiveChanged.subscribe(_eventHandler.bind(view,'onActiveChanged'))); }
    if (emit3) { (this.subscription3 = this.context.onActivate.subscribe(_eventHandler.bind(view,'onActivate'))); }
    if (emit4) { (this.subscription4 = this.context.onDeactivate.subscribe(_eventHandler.bind(view,'onDeactivate'))); }
    if (emit5) { (this.subscription5 = this.context.onFocus.subscribe(_eventHandler.bind(view,'onFocus'))); }
    if (emit6) { (this.subscription6 = this.context.onBlur.subscribe(_eventHandler.bind(view,'onBlur'))); }
    if (emit7) { (this.subscription7 = this.context.onDoubleClick.subscribe(_eventHandler.bind(view,'onDoubleClick'))); }
    if (emit8) { (this.subscription8 = this.context.onContextMenu.subscribe(_eventHandler.bind(view,'onContextMenu'))); }
    if (emit9) { (this.subscription9 = this.context.onUpdateData.subscribe(_eventHandler.bind(view,'onUpdateData'))); }
    if (emit10) { (this.subscription10 = this.context.onInitialized.subscribe(_eventHandler.bind(view,'onInitialized'))); }
    if (emit11) { (this.subscription11 = this.context.onMoveNode.subscribe(_eventHandler.bind(view,'onMoveNode'))); }
    if (emit12) { (this.subscription12 = this.context.onEvent.subscribe(_eventHandler.bind(view,'onEvent'))); }
  }
}
var renderType_TreeComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TreeComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TreeComponent>;
  _TreeModel_0_3:import6.TreeModel;
  _TreeComponent_0_4:Wrapper_TreeComponent;
  _query_loadingTemplate_0_0:import7.QueryList<any>;
  _query_treeNodeTemplate_0_1:import7.QueryList<any>;
  _query_treeNodeFullTemplate_0_2:import7.QueryList<any>;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeComponent_Host0,renderType_TreeComponent_Host,import8.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'Tree',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TreeComponent0(this.viewUtils,this,0,this._el_0);
    this._TreeModel_0_3 = new import6.TreeModel();
    this._TreeComponent_0_4 = new Wrapper_TreeComponent(this._TreeModel_0_3,this.injectorGet(import11.TreeDraggedElement,this.parentIndex));
    this._query_loadingTemplate_0_0 = new import7.QueryList<any>();
    this._query_treeNodeTemplate_0_1 = new import7.QueryList<any>();
    this._query_treeNodeFullTemplate_0_2 = new import7.QueryList<any>();
    this.compView_0.create(this._TreeComponent_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'keydown','body','mousedown','body'),this.eventHandler(this.handleEvent_0));
    this._query_loadingTemplate_0_0.reset(([] as any[]));
    this._TreeComponent_0_4.context.loadingTemplate = this._query_loadingTemplate_0_0.first;
    this._query_treeNodeTemplate_0_1.reset(([] as any[]));
    this._TreeComponent_0_4.context.treeNodeTemplate = this._query_treeNodeTemplate_0_1.first;
    this._query_treeNodeFullTemplate_0_2.reset(([] as any[]));
    this._TreeComponent_0_4.context.treeNodeFullTemplate = this._query_treeNodeFullTemplate_0_2.first;
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import10.ComponentRef_<any>(0,this,this._el_0,this._TreeComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.TreeModel) && (0 === requestNodeIndex))) { return this._TreeModel_0_3; }
    if (((token === import0.TreeComponent) && (0 === requestNodeIndex))) { return this._TreeComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TreeComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TreeComponent_0_4.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TreeComponent_0_4.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const TreeComponentNgFactory:import10.ComponentFactory<import0.TreeComponent> = new import10.ComponentFactory<import0.TreeComponent>('Tree',View_TreeComponent_Host0,import0.TreeComponent);
const styles_TreeComponent:any[] = [
  '.tree-children { padding-left: 20px }',
  '.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }',
  '.tree {\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; \n      -webkit-user-select: none;   \n      -khtml-user-select: none;    \n      -moz-user-select: none;      \n      -ms-user-select: none;       \n      user-select: none;           \n    }'
]
;
class View_TreeComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import12.TreeNodeComponent>;
  _TreeNodeComponent_0_3:import13.Wrapper_TreeNodeComponent;
  _text_1:any;
  _map_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_TreeComponent1,renderType_TreeComponent,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_4 = import3.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        loadingTemplate: p0,
        treeNodeTemplate: p1,
        treeNodeFullTemplate: p2
      }
      ;
    });
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'TreeNode',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import13.View_TreeNodeComponent0(this.viewUtils,this,0,this._el_0);
    this._TreeNodeComponent_0_3 = new import13.Wrapper_TreeNodeComponent(new import15.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._TreeNodeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TreeNodeComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TreeNodeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._TreeNodeComponent_0_3.check_node(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.index;
    this._TreeNodeComponent_0_3.check_index(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this._map_4(this.parentView.context.loadingTemplate,this.parentView.context.treeNodeTemplate,this.parentView.context.treeNodeFullTemplate);
    this._TreeNodeComponent_0_3.check_templates(currVal_0_0_2,throwOnChange,false);
    this._TreeNodeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._TreeNodeComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import16.TreeNodeDropSlot>;
  _TreeNodeDropSlot_0_3:import17.Wrapper_TreeNodeDropSlot;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_TreeComponent2,renderType_TreeComponent,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'TreeNodeDropSlot',new import3.InlineArray2(2,'class','empty-tree-drop-slot'),(null as any));
    this.compView_0 = new import17.View_TreeNodeDropSlot0(this.viewUtils,this,0,this._el_0);
    this._TreeNodeDropSlot_0_3 = new import17.Wrapper_TreeNodeDropSlot();
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._TreeNodeDropSlot_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TreeNodeDropSlot) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TreeNodeDropSlot_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.treeModel.virtualRoot;
    this._TreeNodeDropSlot_0_3.check_node(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 0;
    this._TreeNodeDropSlot_0_3.check_dropIndex(currVal_0_0_1,throwOnChange,false);
    this._TreeNodeDropSlot_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TreeComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_TreeComponent,{});
export class View_TreeComponent0 extends import2.AppView<import0.TreeComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import14.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import18.Wrapper_NgFor;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import14.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import19.Wrapper_NgIf;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeComponent0,renderType_TreeComponent,import8.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','tree'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import14.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import20.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import18.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import21.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import14.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import20.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import19.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import22.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    if (((token === import20.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import23.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.treeModel.roots;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = this.context.treeModel.isEmptyTree();
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    const currVal_14:any = this.context.treeDraggedElement.isDragging();
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_1,'node-dragging',currVal_14);
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_5.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_TreeComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 5)) { return new View_TreeComponent2(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
}