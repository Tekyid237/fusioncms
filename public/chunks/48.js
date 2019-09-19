(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{MKK0:function(t,s,e){"use strict";e.r(s);var r={data:function(){return{errors:{},flags:[{label:"None",value:""},{label:"All Access",value:"all-access"},{label:"No Access",value:"no-access"}],name:"",slug:"",description:"",special:""}},methods:{hasError:function(t){return void 0!==this.errors[t]},getError:function(t){return this.hasError(t)?this.errors[t][0]:""},submit:function(){var t=this;axios.post("/api/roles",{name:this.name,slug:this.slug,description:this.description,special:this.special}).then(function(s){toast("Role successfully created","success"),t.$router.push("/roles")}).catch(function(s){toast(s.response.data.message,"failed"),t.errors=s.response.data.errors})}}},a=e("KHd+"),l=Object(a.a)(r,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"crown"}},[t._v("Create Role")])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"content-container"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("p-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[t._v("Basic Information")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("What is the name and description of this role?")])])]),t._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":t.hasError("name"),"error-message":t.getError("name"),autofocus:"",required:""},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}}),t._v(" "),e("p-slug",{attrs:{name:"slug",label:"Slug",autocomplete:"off","has-error":t.hasError("slug"),"error-message":t.getError("slug"),required:"",watch:t.name},model:{value:t.slug,callback:function(s){t.slug=s},expression:"slug"}}),t._v(" "),e("p-input",{attrs:{name:"description",label:"Description",autocomplete:"off","has-error":t.hasError("description"),"error-message":t.getError("description"),required:""},model:{value:t.description,callback:function(s){t.description=s},expression:"description"}})],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[t._v("Attributes")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("Assign any additional attribute values for your role.")])])]),t._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-select",{attrs:{name:"special",label:"Special Flag",options:t.flags,autocomplete:"off","has-error":t.hasError("special"),"error-message":t.getError("special"),required:""},model:{value:t.special,callback:function(s){t.special=s},expression:"special"}})],1)])]),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("router-link",{staticClass:"button mr-3",attrs:{to:{name:"roles"}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.submit(s)}}},[t._v("Save Role")])],1)],1)])])],1)},[],!1,null,null,null);s.default=l.exports}}]);