<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="search pull-left">
          <input class="input" type="text" placeholder="请输入小区名称">
        </div>
        <a href="#" class="search-btn pull-right">确定</a>
      </div>

      <h2 class="h2">当前小区</h2>
      <ul class="cell-list">
        <li class="item link">
          <a href="#">
            <i class="address pull-left mr10"></i>
            扬子江商务中心
          </a>
        </li>
      </ul>

      <h2 class="h2">附近小区</h2>
      <ul class="cell-list">
        <li class="item link">
          <a class="cell" href="#">
            <span class="tit">扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心</span>
            <span>370m</span>
          </a>
        </li>
        <li class="item link">
          <a class="cell" href="#">
            <span class="tit">扬子江商务中心</span>
            <span>370m</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Location",
    components:{

    }
  }
</script>
