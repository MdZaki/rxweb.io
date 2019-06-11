import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { DisableModel } from './disable.model';

@Component({
    selector: 'app-disable-conditional',
    templateUrl: './disable-conditional.component.html'
})
export class DisableConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'agreeTerms',
            type: 'checkbox',
            textPropName: 'value',
            valuePropName: 'key',
            source: [{key: 1,value:'I agree to terms and condition'}],
        },
        {
            name: 'username',
            type: 'textbox',
            actionKeyNames: ["onlyDisable"],
            modelName: 'disable',
            ui: {
                label: 'UserName',
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['agreeTerms','username'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'disable',
                model: DisableModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}