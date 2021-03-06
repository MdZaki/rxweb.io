import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LABEL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/label/label.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LABEL_ROUTING } from "src/app/components/static-binding/label/label.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LABEL_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LABEL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LabelModule { }



