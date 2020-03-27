(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"8kUA":function(t,e,i){"use strict";i.r(e);var s=i("L2JU"),n=i("HC8+"),r={computed:{selection:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},addLimit:function(){return this.limit-this.selection.length}},props:{value:{type:Array,required:!0},limit:{type:Number,default:1/0},hasHeader:{type:Boolean,default:!0}},methods:{remove:function(t){this.selection=_.filter(this.selection,(function(e){return e.id!==t}))}}},a=i("KHd+"),l=Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card h-full"},[t.hasHeader?i("div",{staticClass:"flex items-center justify-between border-b border-gray-200 p-3"},[i("p-button",{attrs:{theme:"warning"},on:{click:function(e){return t.$emit("reject")}}},[i("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","times"]}}),t._v(" Reject")],1),t._v(" "),i("p-button",{attrs:{theme:"info"},on:{click:function(e){return t.$emit("accept")}}},[t._v("Accept "),i("fa-icon",{staticClass:"ml-2",attrs:{icon:["fas","check"]}})],1)],1):t._e(),t._v(" "),t.selection.length>0?i("div",[i("p-sortable-list",{staticClass:"sortable-list",model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[i("div",{staticClass:"w-full p-3"},t._l(t.selection,(function(e){return i("p-sortable-item",{key:e.id},[i("div",{staticClass:"flex items-center py-2"},[i("div",{staticClass:"w-1/12"},[i("p-sortable-handle",{staticClass:"cursor-move"},[i("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"ellipsis-v"}})],1)],1),t._v(" "),i("div",{staticClass:"w-3/12"},["image"==e.type?i("p-img",{attrs:{src:e.url+"?w=50&h=50&fit=crop","background-color":"white",width:50,height:50}}):i("p-img",{attrs:{src:"/img/"+e.type+"-large.svg","background-color":"white",width:50,height:50}})],1),t._v(" "),i("div",{staticClass:"w-6/12"},[i("div",[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticClass:"w-2/12 text-right"},[i("p-button",{attrs:{theme:"danger"},on:{click:function(i){return t.remove(e.id)}}},[i("fa-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])])})),1)]),t._v(" "),t.addLimit<=0?i("div",{staticClass:"text-sm italic text-danger-600 text-center"},[t._v("\n\t\t\tFile limit reached\n\t\t")]):t._e()],1):i("div",{staticClass:"h-full flex flex-col justify-center items-center text-5xl text-gray-300"},[i("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["far","copy"]}}),t._v(" "),i("span",{staticClass:"text-lg py-2 text-gray-500"},[t._v("Select some files...")])],1)])}),[],!1,null,null,null).exports,c=i("tgEe"),o=i("rZ4N"),u=i("b3ia"),d=i("eC1+"),f=i("fJ7g"),p=i("FGRY"),m=i("+v6e");function h(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y={name:"asset-fieldtype",components:{"file-uploader":n.a,"file-selection":l,"display-action":o.a,"breadcrumb-action":c.a,"search-action":u.a,"sort-action":d.a,"view-action":f.a,directory:p.a,file:m.a},mixins:[i("OuK8").default,i("BAqS").default,i("GfKu").default],data:function(){return{requestOpen:!1,modalOpen:!1,selection:[]}},props:{field:{type:Object,required:!0},value:{type:Array,required:!1,default:function(){return[]}}},watch:{loading:function(t){var e=this;this.$nextTick((function(){t?e.destroySelector():(e.loadSelector(e.$el.querySelector(".selectables")),e.requestOpen&&(e.modalOpen=!0,e.requestOpen=!1))}))}},computed:{selected:{get:function(){return this.value||[]},set:function(t){this.$emit("input",t)}},selectionLimit:function(){return Number(this.field.settings.limit)||1/0},addLimit:function(){return this.selectionLimit-this.selection.length},typeRestriction:function(){return this.field.settings.filetype_restrictions}},methods:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(s.b)({setDropzoneVisible:"filemanager/setDropzoneVisible"}),{isValidSelection:function(t){return 0==this.typeRestriction.length||_.includes(this.typeRestriction,t.type)},push:function(){var t=this;_.forEach(this.selectedFiles,(function(e){return t.add(e)}))},add:function(t){if(this.addLimit>0){var e=_.find(this.selection,["id",t]),i=_.find(this.files,["id",t]);!e&&this.isValidSelection(i)&&this.selection.push(i)}},open:function(){this.reset(),this.setCurrentDirectory(this.field.settings.root_directory),this.setRootDirectory(this.field.settings.root_directory),this.fetchFilesAndDirectories(),this.selection=h(this.selected),this.requestOpen=!0},close:function(){this.reset(),this.selection=[],this.modalOpen=!1},reject:function(){this.close()},accept:function(){this.selected=this.selection,this.close()}})},g=Object(a.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("label",{staticClass:"form__label",attrs:{for:t.field.handle}},[t._v(t._s(t.field.name))]),t._v(" "),i("div",{staticClass:"flex items-start justify-between"},[i("div",{staticClass:"w-1/2"},[i("p-button",{attrs:{disabled:t.requestOpen},on:{click:t.open}},[i("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","plus-circle"]}}),t._v(" Manage Assets\n\t\t\t\t")],1)],1),t._v(" "),i("file-selection",{staticClass:"w-1/2",attrs:{limit:t.selectionLimit,hasHeader:!1},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),i("p-modal",{attrs:{name:"file-manager","no-header":"","no-footer":"","extra-large":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[i("file-uploader",{ref:"uploader"}),t._v(" "),i("div",{staticClass:"row",on:{dragenter:function(e){return t.setDropzoneVisible(!0)}}},[i("div",{staticClass:"side-container"},[i("file-selection",{attrs:{limit:t.selectionLimit},on:{reject:t.reject,accept:t.accept},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1),t._v(" "),i("div",{staticClass:"content-container"},[i("div",{staticClass:"card"},[i("div",{staticClass:"flex items-center justify-between px-3 pt-2"},[i("ul",[i("li",{staticClass:"mr-4"},[i("p-button",{attrs:{theme:"success"},on:{click:t.push}},[i("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","arrow-alt-circle-left"]}})],1)],1)]),t._v(" "),i("ul",[i("li",{staticClass:"inline-flex mr-2"},[i("p-button",{staticClass:"rounded-r-none",attrs:{theme:"primary"},on:{click:function(e){return t.$refs.uploader.openDZ()}}},[i("fa-icon",{attrs:{icon:["fas","upload"]}})],1),t._v(" "),i("p-button",{directives:[{name:"modal",rawName:"v-modal:new-folder",arg:"new-folder"}],staticClass:"rounded-l-none"},[i("fa-icon",{attrs:{icon:["fas","folder-plus"]}})],1)],1)]),t._v(" "),i("ul",{staticClass:"flex w-full"},[i("li",{staticClass:"mr-2 w-full"},[i("search-action")],1)]),t._v(" "),i("ul",{staticClass:"flex"},[i("li",{staticClass:"mr-2"},[i("display-action")],1),t._v(" "),i("li",{staticClass:"mr-2"},[i("sort-action")],1),t._v(" "),i("li",{staticClass:"mr-2"},[i("view-action")],1)])]),t._v(" "),i("div",{staticClass:"flex items-center border-b border-gray-200 px-3 py-2"},[i("breadcrumb-action")],1),t._v(" "),i("div",{staticClass:"gallery-container selectables"},[i("div",{staticClass:"gallery border-b border-gray-200 pb-2"},t._l(t.directories,(function(e){return i("directory",{key:e.id,attrs:{directory:e,isDropzone:!0},on:{dblclick:function(i){return t.navigate(e)}}})})),1),t._v(" "),i("div",{staticClass:"gallery"},t._l(t.files,(function(e){return i("file",{key:e.id,attrs:{file:e},on:{dblclick:function(i){return t.add(e.id)}}})})),1)])])])])],1),t._v(" "),i("portal",{attrs:{to:"modals"}},[i("new-folder-modal")],1)],1)}),[],!1,null,null,null);e.default=g.exports}}]);