<!--
 * @Author      : ZhouQiJun
 * @Date        : 2022-12-26 17:59:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-02-13 09:24:59
 * @Description : 
-->
<script setup lang="ts" name="HookPage">
import {
  FileViewer,
  HookDemo,
  MyInput,
  PopperButton,
  PopperButtonHook,
  testNameExport,
} from '@/components'

const myInput = ref('hello')
</script>

<template>
  <div class="page">
    <HookDemo />
    <MyInput v-model="myInput" />
    <p>{{ myInput }}</p>
    <hr />
    <FileViewer />
    <p>{{ testNameExport }}</p>
    <h4>usePopper -- hook 与第三方库</h4>
    <PopperButtonHook />
    <PopperButton />
  </div>
</template>

<style lang="scss"></style>
