webpackJsonp([11],{43:function(s,e,t){var i,c;i=t(44),c=t(45),s.exports=i||{},s.exports.__esModule&&(s.exports=s.exports["default"]),c&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=c)},44:function(s,e,t){"use strict";function i(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(e,"__esModule",{value:!0});var c=t(10),a=i(c);e["default"]={data:function(){return{loading:!0,project:{},fileAccess:"",userId:"",users:[]}},route:{activate:function(){this.$parent.showProject=!0},deactivate:function(){this.$parent.showProject=!1},data:function(){this.loading=!0;var s=this;a["default"].get("/project/"+this.$route.params.id+"/info.json",{},function(e){s.project=e.data.project}),s.$parent.projectId=this.$route.params.id,a["default"].get("/project/"+this.$route.params.id+"/users.json",{},function(e){s.users=e.data.users,s.fileAccess=e.data.fileAccess},function(){s.loading=!1})}},methods:{chose:function(s){s.id==this.userId?this.userId="":this.userId=s.id},ok:function(){a["default"].post("/project/"+this.project.id+"/transfer.json",{userId:this.userId},function(s){toastr.success("操作成功")})}}}},45:function(s,e){s.exports=' <div class="db-members cb"> <div class="form dvn-import-members"> <div class=spinner v-if=loading> <div class=rect1></div> <div class=rect2></div> <div class=rect3></div> <div class=rect4></div> <div class=rect5></div> </div> <template v-if="users.length>1"> <div class=item> <div class="col-sm-2 label">选择成员</div> <div class=col-sm-10> <ul class="cb dbv-chose-users"> <li v-for="item in users" v-if="item.id != project.userId" v-bind:class="{\'active\':userId==item.id}" v-on:click=chose(item)> <div class=dbv-user-icon> <img class=img v-bind:src=item.avatar v-if=item.avatar> <div class="img ta-c word" v-else>{{item.nickname}}</div> <p class=flag></p> </div> <p>{{item.nickname}}</p> </li> </ul> </div> </div> <div class=item> <div class="col-sm-2 label"></div> <div class=col-sm-2> <input type=button class="btn btn-primary full-width" v-on:click=ok v-bind:disabled=!userId value=确认> </div> </div> </template> <template v-if="!loading && users.length<=1"> <div class="ta-c api-error-tip" v-cloak v-else> <i class="iconfont icon-api" style="font-size: 120px"></i> <p style="font-size: 24px">该项目暂无其他成员</p> </div> </template> </div> </div> '}});