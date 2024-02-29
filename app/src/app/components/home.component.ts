// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
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

  sendLocation(location: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { location };
      bh.local = {};
      bh = this.sd_1LTsAEh404sBHdSg(bh);
      //appendnew_next_sendLocation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fJO2x4vjOEh1PVKd');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_3yTyYfJGGxD7ajsZ(bh) {
    try {
      this.page.location = undefined;
      bh = this.requestLocation(bh);
      //appendnew_next_sd_3yTyYfJGGxD7ajsZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3yTyYfJGGxD7ajsZ');
    }
  }

  requestLocation(bh) {
    try {
      const page = this.page;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            page.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              timestamp: Date.now(),
            };
            this.sendLocation(page.location);
          },
          (error) => {
            bh.result = error;
            console.error('Error getting location', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
      bh = this.getUser(bh);
      //appendnew_next_requestLocation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lHgJp97nb9Oa4rNc');
    }
  }

  getUser(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('user'));
      bh = this.checkIfUserExist(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rQvIjcZwKcV0HGBo');
    }
  }

  checkIfUserExist(bh) {
    try {
      if (
        this.sdService.operators['null'](
          this.page.user,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.ifNotGoToRegister(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TWvJI1Jtn2JDrnpo');
    }
  }

  async ifNotGoToRegister(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/register');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_ifNotGoToRegister
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9LpFOxrT7Bv6cdh6');
    }
  }

  sd_1LTsAEh404sBHdSg(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.updateEndpoint(bh);
      //appendnew_next_sd_1LTsAEh404sBHdSg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1LTsAEh404sBHdSg');
    }
  }

  updateEndpoint(bh) {
    try {
      const page = this.page;
      bh.ssdURL = bh.ssdURL + 'add-location';

      bh.payload = {
        ...page.user,
        ...bh.input.location,
      };
      bh = this.sd_caiGzSK0KdIbzTTu(bh);
      this.sd_W9E2fZi3w8tV1a7R(bh);
      //appendnew_next_updateEndpoint
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pBjTeuR1NSl6Wpvq');
    }
  }

  async sd_caiGzSK0KdIbzTTu(bh) {
    try {
      let requestOptions = {
        url: bh.ssdURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.payload,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_caiGzSK0KdIbzTTu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_caiGzSK0KdIbzTTu');
    }
  }

  sd_W9E2fZi3w8tV1a7R(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.payload);
      //appendnew_next_sd_W9E2fZi3w8tV1a7R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W9E2fZi3w8tV1a7R');
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
