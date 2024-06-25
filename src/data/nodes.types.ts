export interface INode {
  key: string;
  label: string;
  data: string;
  icon: string;
  children?: INode[];
}
