<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask">

            </div>
            <div class="modal-dialog">

            </div>
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <div class="body">

                </div>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
                <!--emit是子组件向父组件传递数据-->
                <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
                <!--emit是子组件向父组件传递数据-->
                <div class="btn-group" v-if="btnType==3">
                    <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" @click="$emit('cancel')">{{cancelText}}</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // 弹框类型，小small，中middle，大large 表单form
    modalType: {
      type: String,
      default: 'form'
    },
    //  弹框标题
    title: String,
    //  按钮类型1,只有确定，2只有取消 3，确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style scoped>

</style>
