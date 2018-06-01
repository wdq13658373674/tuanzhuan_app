<template>
  <div>
    <section class="page-group">
      <div class="tz-neighbor-post">
        <div class="content">
          <textarea class="textarea" name="" id="" cols="30" rows="8" placeholder="说点什么吧"></textarea>
        </div>

        <div class="upload-img clearfix mt20">
          <!--图片列表-->
          <div class="img-list pull-left">
            <div class="img-box">
              <img src="@/assets/images/test/img10.png" alt="">
            </div>
            <div class="img-box">
              <img src="@/assets/images/test/img10.png" alt="">
            </div>
            <div class="img-box">
              <img src="@/assets/images/test/img5.png" alt="">
            </div>
            <div class="img-box">
              <img src="@/assets/images/test/img10.png" alt="">
            </div>
          </div>
          <!--上传-->
          <label class="upload pull-left">
            <input type="file" class="file">
          </label>
        </div>

        <h2 class="h2 gray">还可以添加视频哦～</h2>
      </div>
    </section>

    <footer>
      <div class="bottom-fixed tz-neighbor-rule">
        <a href="#">邻聚管理规则说明</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Post",
    components:{

    },
    computed:{

    },
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import '../../assets/css/ngbPost.css';
</style>
