(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{EACl:function(e,n,t){"use strict";n.a={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},g9fq:function(e,n,t){"use strict";t.r(n);var i={name:"checkbox-fieldtype",mixins:[t("EACl").a],props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},data:function(){return{values:[]}},mounted:function(){this.value||this.$emit("input",[]),this.values=_.cloneDeep(this.value)}},l=t("KHd+"),u=Object(l.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p-checkbox-group",{attrs:{label:e.field.name,help:e.field.help,inline:"row"==e.field.settings.display}},e._l(e.field.settings.options,(function(n){return t("p-checkbox",{key:n.value,attrs:{name:e.field.name,id:n.value,"native-value":n.value},on:{input:function(n){return e.$emit("input",e.values)}},model:{value:e.values,callback:function(n){e.values=n},expression:"values"}},[[e._v("\n                    "+e._s(n.label)+"\n                ")]],2)})),1)],1)}),[],!1,null,null,null);n.default=u.exports}}]);