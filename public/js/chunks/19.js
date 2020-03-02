(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{BiPX:function(e,t,n){"use strict";var a={props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},submit:{required:!0}}},r=n("KHd+"),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"content-container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p-tabs",{attrs:{replace:""}},[n("p-tab",{attrs:{name:"Settings"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"side-container"},[n("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[n("h3",[e._v("General")]),e._v(" "),n("p",{staticClass:"text-sm"},[e._v("What will this menu be called?")])])]),e._v(" "),n("div",{staticClass:"content-container"},[n("p-input",{attrs:{name:"name",label:"Name",help:"What this menu will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the menu's name.",autocomplete:"off",monospaced:"",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),n("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this menu will link to.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)])]),e._v(" "),n("p-tab",{attrs:{name:"Fields"}},[n("section-builder",{on:{input:function(t){return e.$emit("sectionBuilderInput")}},model:{value:e.form.fieldset.sections,callback:function(t){e.$set(e.form.fieldset,"sections",t)},expression:"form.fieldset.sections"}})],1)],1),e._v(" "),n("portal",{attrs:{to:"actions"}},[n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"menus"}}},[e._v("Go Back")]),e._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Menu")])],1)],1)])])}),[],!1,null,null,null);t.a=i.exports},WJwh:function(e,t,n){"use strict";n.r(t);var a=n("ke3Z"),r={head:{title:function(){return{inner:this.menu.name||"Loading..."}}},data:function(){return{id:null,fieldset:null,form:new a.a({name:"",handle:"",description:"",fieldset:{}},!0)}},components:{"shared-form":n("BiPX").a},methods:{submit:function(){var e=this,t={};t.sections=this.form.fieldset.sections,axios.post("/api/fieldsets/".concat(this.form.fieldset.id,"/sections"),t).then((function(t){e.form.patch("/api/menus/"+e.id).then((function(t){toast("Menu successfully saved","success"),e.$router.push("/menus")})).catch((function(e){toast(e.message,"failed")}))}))},sectionChange:function(){this.form.hasChanges||this.form.onFirstChange()}},beforeRouteEnter:function(e,t,n){axios.all([axios.get("/api/menus/"+e.params.menu)]).then(axios.spread((function(e){n((function(t){t.id=e.data.data.id,t.form.name=e.data.data.name,t.form.handle=e.data.data.handle,t.form.description=e.data.data.description,t.form.fieldset=e.data.data.fieldset,t.$emit("updateHead"),t.$nextTick((function(){t.form.resetChangeListener()}))}))})))}},i=n("KHd+"),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"anchor"}},[e._v("Edit Menu")])],1),e._v(" "),n("shared-form",{attrs:{form:e.form,submit:e.submit,id:e.id,fieldset:e.fieldset},on:{sectionBuilderInput:function(t){return e.sectionChange()}}})],1)}),[],!1,null,null,null);t.default=s.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(e,t,n){"use strict";n("WjD0");function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,n,r;return t=e,(n=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,n),r&&a(t,r),e}(),i=n("5fFP");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,"a",(function(){return u}));var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=n;var a=this;for(var i in this.__data={},t)this[i]=t[i],a.__data[i]=a[i],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,a.hasChanges||a.onFirstChange()}})}(i)}var t,n,a;return t=e,(n=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this;return new Promise((function(a,r){axios[e](t,n.data()).then((function(e){n.onSuccess(e.data),i.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){n.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&i.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&i.a.commit("form/setPreventNavigation",!1)}}])&&o(t.prototype,n),a&&o(t,a),e}()}}]);