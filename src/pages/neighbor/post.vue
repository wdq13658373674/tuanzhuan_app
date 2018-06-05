<template>
  <div>
    <BarNav title="发布动态">
      <a class="link pull-right" slot="right" >
        <span class="nav-btn orange" @click="release">发布</span>
      </a>
    </BarNav>

    <section class="page-group">
      <div class="tz-neighbor-post">
        <div class="content">
          <div class="select-type" @click="selectType">{{bbsType}}</div>
        </div>

        <div class="content">
          <textarea class="textarea" name="" id="" cols="30" rows="8" placeholder="说点什么吧" v-model="content"></textarea>
        </div>

        <div class="upload-img clearfix mt20">
          <!--图片列表-->
          <div class="img-list pull-left">
            <div class="img-box" v-for="(item, index) in imgListUrl">
              <img class="img" v-lazy="item" alt="" />
            </div>
          </div>
          <!--上传-->
          <label class="upload pull-left">
            <input type="file" id="file" accept="image/*" class="file" ref="file" @change="addImg($event)">
          </label>
        </div>

        <!--<h2 class="h2 gray">还可以添加视频哦～</h2>-->
      </div>
    </section>

    <footer>
      <div class="bottom-fixed tz-neighbor-rule">
        <a href="#">邻聚管理规则说明</a>
      </div>
    </footer>

    <!--选择帖子类型 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="isType" :menus="typeList" @on-click-menu="changeType" show-cancel></actionsheet>
  </div>
</template>

<script>
  import {mapState } from 'vuex'
  import { Actionsheet, Tab } from 'vux'
  import BarNav from '../layout/barNav'
  import {compressImg} from '@/assets/js/upload/upload'
  export default {
    name: "Post",
    components:{
      Actionsheet,
      BarNav
    },
    computed:{
      ...mapState(['userInfo', "roomInfo"])
    },
    data(){
      return {
        getTypedata:{},
        bbsType: "请选择分类",
        isType: false,
        typeList:{},
        content:'',
        imgListUrl:[],
        imgList:[],
        bobData:[]
      }
    },
    mounted(){
      this.getType();
    },
    methods:{
      getType(){
        let params={
          village_id: this.roomInfo.village_id
        };
        this.$axios.get(global.API_HOST+'bbs/getaddBbsinfo',{
          params:params
        }).then(res=>{
          res=res.data;
          this.getTypedata = res.data;
          res.data.map((item, index) => {
            this.typeList[index] = item.type_bbs_title
          });
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      selectType(){
        this.isType = true;
      },
      changeType(key){
        this.bbsType = this.typeList[key];
      },
      addImg(event){
        let files = event.target.files[0];
        this.imgListUrl.push(this.getObjectURL(files));
        compressImg(event).then(params=>{
          params.append('imgFile','image');
          params.append('user_id',this.userInfo.user_id);

          this.upload_ajax(params);
        });
      },
      /**
       * 上传头像接口
       * params ：接口接收参数
       * **/
      upload_ajax(params){
        this.$axios.post(global.API_HOST+'index/upload',params,{
          headers:{'Content-Type':'multipart/form-data'}//添加请求头
        }).then(res=>{
          res=res.data;
          if(res.status==0){
            this.imgList.push(res.data)
          }else{
            this.$vux.toast.text('图片过大,上传失败');
          }
        });
      },
      /*预览图片*/
      getObjectURL (files) {
        let url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(files) ;
        }else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(files) ;
        }else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(files) ;
        }
        return url ;
      },
      release(){
        let _this = this;
        if(this.bbsType == "请选择分类"){
          this.$vux.toast.text('请选择分类');
          return false
        }
        if(this.content == ""){
          this.$vux.toast.text('请填写内容');
          return false
        }

        let bbs_type_id;
        this.getTypedata.map((item, index)=>{
          if(item.type_bbs_title == this.bbsType){
            bbs_type_id = item.type_bbs_id;
          }
        });

        let params={
          bbs_type_id: bbs_type_id,
          bbs_image: JSON.parse(JSON.stringify(this.imgList)).join(","),
          bbs_user_id: this.userInfo.user_id,
          bbs_village_id: this.roomInfo.village_id,
          bbs_content: this.content
        };


        this.$axios.get(global.API_HOST+'bbs/addBbs',{
          params:params
        }).then(res=>{
          console.log(params);
          res=res.data;
          if(res.status == 0){
            this.$vux.toast.text('发布成功');
            this.$router.push({name: 'Neighbor'});
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },

      /**
       * 入库
       */
      postSave(){

        console.log(params);

      }
    }
  }
</script>

<style lang="css">
  @import '../../assets/css/ngbPost.css';
</style>

<style lang="scss">
  @import "../../core/base";

  /*action-sheet*/
  .user-action-sheet{
    .weui-actionsheet{
      width:rem(670);
      left:0;
      right:0;
      margin:0 auto;
      background: none;
    }

    .weui-actionsheet__menu{
      @include border-radius(rem(8));
    }
    .weui-actionsheet__action{
      @include border-radius(rem(8));
      margin-top:rem(20);
      margin-bottom:rem(27);
    }

    .weui-actionsheet__cell{
      font-size:rem(26);
      padding:rem(34) 0;
    }
  }
</style>
