<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-01-05 09:49:46
 * @LastEditors : JackChou
 * @LastEditTime: 2023-01-17 20:13:12 +0800
 * @Description : v-once 使用
 
 NOTE 确定变量变化，元素或者组件不需要重新渲染时使用。和 v-if 或者 v-show 一起使用时，页面会保持最初的隐藏或者显示状态。
 比如：1. 用户登录后的账户信息 2. 文章 3. 表格的表头。

 v-once 可用在元素、组件上。
 <template>
  <p v-once>{{ msg }}</p>
  <div v-once>
    <p>{{ notification}}</p>
  </div>
  <my-component v-once />
  <li v-for="”item" in list” v-once>{{item}}</li>
</template>
-->
<script setup>
import { ref } from 'vue'

const message = ref('Hello World')
const updateMessage = () => {
  message.value = 'Goodbye World'
}

const msg = ref('hello world')
const show = ref(true)
</script>

<template>
  <h4>v-once 组件再次渲染不更新节点</h4>
  <h5 v-once>{{ message }}</h5>
  <input :value="message" />
  <button @click="updateMessage">Update Message</button>
  <h5>和 v-if 使用</h5>
  <div>
    <p v-once v-if="show">{{ msg }}</p>
    <button @click="show = !show">Toggle</button>
    <button @click="msg = 'changed message'">Change message</button>
    <div>
      Current state:
      <p>msg: {{ msg }}</p>
    </div>
  </div>
</template>
