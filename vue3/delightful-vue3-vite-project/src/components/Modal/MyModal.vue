<!--
 * @Date        : 2022-11-02 14:19:48
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-09 16:35:22
 * @Description : 
-->
<script lang="ts">
export default {
  props: {
    isOpen: Boolean,
  },
  emits: {
    'close-modal': null,
  },
  setup(props, context) {
    // 在页面上添加一个div，用来挂载弹窗
    const modalContainer = document.createElement('div')
    modalContainer.id = 'modal'
    document.body.appendChild(modalContainer)

    const buttonClick = () => {
      context.emit('close-modal')
    }
    return {
      buttonClick,
    }
  },
}
</script>

<template>
  <Teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2>
        <slot>this is a modal</slot>
      </h2>
      <button @click="buttonClick">Close</button>
    </div>
  </Teleport>
</template>

<style>
#center {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  border: 2px solid black;
  background-color: white;
}
</style>
