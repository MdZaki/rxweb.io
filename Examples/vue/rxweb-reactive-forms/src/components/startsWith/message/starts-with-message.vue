
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Company</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.company" type="text" name="name" />
          <small class="form-text text-muted">Input should startsWith `R`<br/></small>
         <small class="form-text text-muted">Shows custom message<br/></small>
       <div v-if="userFormGroup.controls.company.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.company.errors.startsWith.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class StartsWithMessageComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
