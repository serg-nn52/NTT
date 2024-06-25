import type { INode } from '@/data/nodes.types';

export interface IDialogProps {
  modelValue: boolean;
  nodes: INode[];
  title: string;
  selectionMode: 'multiple' | 'single';
}
export interface IDialogEmits {
  (event: 'update:modelValue', value: boolean): void;
  (event: 'select', value: string[]): void;
}
