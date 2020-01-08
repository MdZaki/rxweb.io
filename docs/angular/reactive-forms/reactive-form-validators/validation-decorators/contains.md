---
title: contains  
description: Contains validation {{validatorType}} will check whether a particular value is in the input. It will not allow user to enter input that does not contains the predefined value.
author: rxcontributortwo
category: form-validations
subcategory: String
type: tabs
linktitle: contains
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>contains validation {{validatorType}} will check whether a particular value is in the input. It will not allow user to enter input that does not contains the predefined value.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like Email Address, BusinessEmailAddress RecoveryEmailAddress, OtherEmailAddress and you want the user to enter the input which contains the predefined value. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
	<li>Allow input which contains the predefined value in EmailAddress.</li>
	<li>Apply contains validation based on matched condition in the form, like if the EmailAddress is `abc@gmail.com`, then only the contains validation must be applied to BusinessEmailAddress value (Based on function).</li>
	<li>Apply contains validation based on matched condition in the form, like if the EmailAddress is `abc@gmail.com`, then only the contains validation must be applied to RecoveryEmailAddress value (Based on string datatype).</li>
	<li>Adding Custom Message on OtherEmailAddress Field.</li>
     <li>Shows the custom message on `Organization Email Address` field by using `messageKey` property.</li>
	<data-scope scope="['decorator','validator']">
		<li>Apply contains validation dynamically based on server rules.</li>
	</data-scope>
</ol>

Let’s see how contains {{validatorType}} fulfil the need.

# Basic Contains Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of EmailAddress in the model to achieve the functional need of point 1.
<div component="app-code" key="contains-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope> 

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="contains-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="contains-add-html"></div> 
<div component="app-example-runner" ref-component="app-contains-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="contains-edit-component"></div>

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="contains-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="contains-edit-html"></div> 
<div component="app-example-runner" ref-component="app-contains-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="contains-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="contains-add-html"></div> 
<div component="app-example-runner" ref-component="app-contains-add"></div>
</data-scope>

# ContainsConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@contains()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.contains()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `contains` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>Contains validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a   (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>value property of ContainsConfig is used to assign a value which must be present in the field input.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

Contains validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="contains-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="contains-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-contains-conditionalExpression" title="contains {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="contains-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-contains-message" title="contains {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="contains-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-contains-messageKey" title="contains {{validatorType}} with messageKey" key="messageKey"></div>

## value 
Type :  `string` 

value property of ContainsConfig is used to assign a value which must be present in the field input.

<div component="app-code" key="contains-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-contains-value" title="contains {{validatorType}} with value" key="value"></div>

# Complete Contains Example

This Complete Contains example which includes all the ContainsConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-contains-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="contains-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="contains-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="contains-complete-html"></div>
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic Contains Example

This Dynamic Contains example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic contains example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-contains-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="contains-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="contains-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="contains-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="contains-dynamic-html"></div>
# [/Html]
***
</data-scope>