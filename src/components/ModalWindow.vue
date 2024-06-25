<template>
  <teleport to="body">
    <Dialog dismissableMask v-model:visible="visible" modal :header="title" class="modal">
      <div>
        <Tree
          :value="nodes"
          v-model:selectionKeys="selectedKey"
          :selectionMode="selectionMode"
          :metaKeySelection="false"
          @nodeSelect="onNodeSelect"
          @nodeUnselect="onNodeUnselect"
        ></Tree>
      </div>
      <div class="modal-buttons">
        <Button type="button" label="Закрыть" severity="secondary" @click="closedModal"></Button>
        <Button type="button" label="Ок" @click="saveData"></Button>
      </div>
    </Dialog>
  </teleport>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Tree from 'primevue/tree';
import { computed, ref } from 'vue';
import Button from 'primevue/button';
import type { INode } from '@/data/nodes.types';
import type { IDialogEmits, IDialogProps } from './ModalWindow.types';

const selectedKey = ref(null);
//делаю массивом на случай изменения ТЗ, если понадобиться впоследствии множественное выделение
const selectedNode = ref<INode[]>([] as INode[]);

const props = defineProps<IDialogProps>();
const emits = defineEmits<IDialogEmits>();

const visible = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits('update:modelValue', newValue);
  },
});

const onNodeSelect = (node: INode) => {
  //при single при изменении папки не отрабатывает onNodeUnselect, только при явном снятии выделения
  if (props.selectionMode === 'single') {
    selectedNode.value = [node];
    return;
  }
  if (!selectedNode.value.find((el) => el.key === node.key)) selectedNode.value.push(node);
};

const onNodeUnselect = (node: INode) => {
  selectedNode.value = selectedNode.value.filter((el) => el.key !== node.key);
};

//Закрываю модалку
const closedModal = () => {
  visible.value = false;
};

const saveData = () => {
  closedModal();
  //отправляю label как идентификатор, чтобы вывести пользователю в моей реализации, возможно key, если нужна уникальность
  emits(
    'select',
    selectedNode.value.map((el) => el.label),
  );
};
</script>

<style></style>
