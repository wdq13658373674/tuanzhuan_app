<!--******(switch 开关按钮组件)******
  说明：
  （1）接受3个属性值
      disabled  ： 是否可点击
      value     ： 表单值（使用v-model绑定）
      value-map ： 自定义 false true 映射的实际值

  （2）事件
      @on-change : 值变化时触发,参数为 (currentValue)
***********-->
<template>
  <div class="tz-switch">
    <input type="checkbox" class="switch" :disabled="disabled" v-model="currentValue">
  </div>
</template>

<script>
  export default {
    name: "tzSwitch",
    props: {
      disabled: Boolean,
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      valueMap: {
        type: Array,
        default: () => ([false, true])
      },
    },
    data(){
      return {
        currentValue:this.toBoolean(this.value)
      }
    },
    methods: {
      toBoolean (val) {
        if (!this.valueMap) {
          return val
        } else {
          const index = this.valueMap.indexOf(val)
          return index === 1
        }
      },
      toRaw (val) {
        if (!this.valueMap) {
          return val
        } else {
          return this.valueMap[val ? 1 : 0]
        }
      }
    },
    watch: {
      currentValue (val) {
        const rawValue = this.toRaw(val)
        this.$emit('input', rawValue)
        this.$emit('on-change', rawValue)
      },
      value (val) {
        this.currentValue = this.toBoolean(val)
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import "../core/base";

  .tz-switch{
    .switch{
      display:block;
      @include wh(rem(53),rem(32));
      position: relative;
      border:1px solid #000;
      background: #fff;
      -webkit-appearance: none;
      appearance: none;
      @include border-radius(rem(16));

      &:before{
        content:'';
        @include wh(rem(50),rem(30));
        left:0;
        top:0;
        @include border-radius(rem(15));
        background-color: #FDFDFD;
        @include transition(
            transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1)
        );
      }

      &:after{
        content: " ";
        position: absolute;
        top: rem(5);
        left: rem(6);
        @include wh(rem(20),rem(20));
        border-radius: 50%;
        background-color: #fff;
        border:1px solid #000;
        @include transition(
            transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1)
        );
      }

      &:checked{
        &:after{
          border:1px solid $primary;
          background:$primary;
          @include translateX(rem(20));
        }
      }
    }
  }
</style>

