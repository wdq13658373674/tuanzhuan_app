<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="bill">
          <p>
            <span class="f32 mr10">3月账单</span>
            <span>03/01-03/31</span>
            <span class="pull-right">单位：元</span>
          </p>
          <p>未缴纳</p>
          <p>¥305.04</p>
          <p>账单总金额</p>
        </div>

        <div class="radio-title">
          <label>
            <input type="checkbox" name="pay" checked>
            <div class="radio pull-left mr20">
              <i class="check"></i>
            </div>
            <span class="txt">物业服务费详情</span>
          </label>
        </div>

        <ul class="cell-list ml53" style="list-style: disc;">
          <li class="item">
            <span class="tit">物业服务费</span>
            <span>¥303.78</span>
          </li>
          <li class="item">
            <span class="tit">物业服务费</span>
            <span>¥303.78</span>
          </li>
          <li class="item">
            <span class="tit">物业服务费</span>
            <span>¥303.78</span>
          </li>
        </ul>
      </div>
      <div class="no-more">
        - 没有更多记录了 -
      </div>
    </section>

    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">我要缴费</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "ServiceDetail",
    computed:{

    }
  }
</script>
<style lang="css">
  @import '../../assets/css/property.css';
</style>
