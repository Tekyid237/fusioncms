(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{bdEf:function(t,e,r){"use strict";r.r(e);var o={head:{title:function(){return{inner:"Import"}}},data:function(){return{endpoint:"/datatable/imports"}},filters:{shorten:function(t){return _.truncate(t,{length:50})}},methods:{destroy:function(t){axios.delete("/api/imports/".concat(t)).then((function(t){toast("Import successfully deleted.","success"),proton().$emit("refresh-datatable-imports")}))}}},n=r("KHd+"),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"ship"}},[t._v("Importer")])],1),t._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button",attrs:{to:{name:"importer.create"}}},[t._v("Create")])],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("p-table",{key:"importer_table",attrs:{endpoint:t.endpoint,name:"imports","sort-by":"name","per-page":10,"primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(e){return[r("router-link",{attrs:{to:{name:"importer.view",params:{importer:e.record.id}}}},[t._v(t._s(e.record.name))])]}},{key:"handle",fn:function(e){return[r("code",[t._v(t._s(e.record.handle))])]}},{key:"source",fn:function(e){return[r("em",[t._v(t._s(t._f("shorten")(e.record.source)))])]}},{key:"actions",fn:function(e){return[r("p-dropdown",{attrs:{right:""}},[r("fa-icon",{attrs:{icon:["fas","bars"]}}),t._v(" "),r("template",{slot:"options"},[r("p-dropdown-item",{attrs:{to:{name:"importer.edit",params:{importer:e.record.id}}},on:{click:function(t){t.preventDefault()}}},[t._v("Edit")]),t._v(" "),r("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-importer",value:e.record,expression:"table.record",arg:"delete-importer"}],on:{click:function(t){t.preventDefault()}}},[t._v("Delete")])],1)],2)]}}])})],1)]),t._v(" "),r("portal",{attrs:{to:"modals"}},[r("p-modal",{attrs:{name:"delete-importer",title:"Delete Import"},scopedSlots:t._u([{key:"footer",fn:function(e){return[r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-importer",arg:"delete-importer"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(e){return t.destroy(t.imports.data.id)}}},[t._v("Delete")]),t._v(" "),r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-importer",arg:"delete-importer"}]},[t._v("Cancel")])]}}])},[r("p",[t._v("Are you sure you want to permenantly delete this import?")])])],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);