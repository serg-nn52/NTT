<template>
  <header>
    <div class="wrapper">
      <Toast class="toast" />
      <Button label="Открыть" @click="visible = true" />
      <ModalWindow
        @select="(value) => handlerSelect(value)"
        :nodes="nodes"
        v-model="visible"
        title="Дерево папок"
        selectionMode="single"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue';
import ModalWindow from './components/ModalWindow.vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import { nodes } from './data/nodes.data';

const visible = ref(false);

const toast = useToast();

const handlerSelect = (value: string[]) => {
  if (!value.length) return;
  toast.add({
    severity: 'success',
    summary: `Выбрано!`,
    detail: value.join('\n'),
    life: 300000,
  });
};
</script>

<style scoped></style>
