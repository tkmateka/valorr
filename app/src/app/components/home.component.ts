// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_qlSvWnYS3KMMNfNb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qlSvWnYS3KMMNfNb(bh) {
    try {
      bh = this.sd_3yTyYfJGGxD7ajsZ(bh);
      //appendnew_next_sd_qlSvWnYS3KMMNfNb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qlSvWnYS3KMMNfNb');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_3yTyYfJGGxD7ajsZ(bh) {
    try {
      this.page.location = undefined;
      bh = this.sd_lHgJp97nb9Oa4rNc(bh);
      //appendnew_next_sd_3yTyYfJGGxD7ajsZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3yTyYfJGGxD7ajsZ');
    }
  }

  sd_lHgJp97nb9Oa4rNc(bh) {
    try {
      const page = this.page;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            page.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              timestamp: Date.now(),
              message: `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`,
            };
          },
          (error) => {
            bh.result = error;
            console.error('Error getting location', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
      //appendnew_next_sd_lHgJp97nb9Oa4rNc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lHgJp97nb9Oa4rNc');
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
  //appendnew_flow_homeComponent_Catch
}
