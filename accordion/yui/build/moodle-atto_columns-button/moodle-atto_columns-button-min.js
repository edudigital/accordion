YUI.add("moodle-atto_accordion-button",function(e,t){var n="atto_accordion",r="accordion_option",i="atto_accordion",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",OPTIONCONTROL:"optioncontrol"},o={OPTIONCONTROL:".optioncontrol"},u='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><select class="{{CSS.OPTIONCONTROL}}" id="{{elementid}}_{{OPTIONCONTROL}}" name="{{elementid}}_{{OPTIONCONTROL}}"><option value="{{typeone}}">50-50</option><option value="{{typetwo}}">66-33</option><option value="{{typethree}}">33-66</option><option value="{{typefour}}">33-33-33</option></select><br><br><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div></form>';e.namespace("M.atto_accordion").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var t=["accordion"];e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_accordion",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_getOptionControlName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o),s.set("bodyContent",u),s.show(),this.markUpdated()},_getFormContent:function(t){var i=e.Handlebars.compile(u),o=e.Node.create(i({elementid:this.get("host").get("elementid"),CSS:s,OPTIONCONTROL:r,component:n,typeone:this.get("typeone"),typetwo:this.get("typetwo"),typethree:this.get("typethree"),typefour:this.get("typefour"),clickedicon:t}));return this._form=o,this._form.one("."+s.INPUTSUBMIT).on("click",this._doInsert,this),o},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var t=this._form.one(o.OPTIONCONTROL);this.editor.focus(),this.get("host").insertContentAtFocusPoint(t.get("value")),this.markUpdated()}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},typeone:{value:""},typetwo:{value:""},typethree:{value:""},typefour:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});