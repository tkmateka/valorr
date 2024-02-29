// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_n0qcTJs9Nz2PQNp5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_n0qcTJs9Nz2PQNp5(bh) {
    try {
      bh = this.sd_hJ3n1L6IbYEBDLUY(bh);
      //appendnew_next_sd_n0qcTJs9Nz2PQNp5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n0qcTJs9Nz2PQNp5');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.storeUser(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bc0KSakN7WDzaQaq');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_hJ3n1L6IbYEBDLUY(bh) {
    try {
      this.page.user = { firstName: '', lastName: '', email: '' };
      //appendnew_next_sd_hJ3n1L6IbYEBDLUY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hJ3n1L6IbYEBDLUY');
    }
  }

  storeUser(bh) {
    try {
      localStorage.setItem('user', JSON.stringify(this.page.user));
      bh = this.goHome(bh);
      //appendnew_next_storeUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jcMMImTohU1KAzqN');
    }
  }

  async goHome(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_goHome
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4fz9VjPysZCkxse');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_registerComponent_Catch
}
