import{f as e}from"./index-DLz49pOH.js";import{T as u}from"./Task-PTLexs9X.js";import"./vue.esm-bundler-D5_F-1X6.js";const T={onPinTask:e(),onArchiveTask:e()},D={component:u,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...T}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},a={args:{task:{...s.args.task,state:"TASK_PINNED"}}},t={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const S=["ActionsData","Default","Pinned","Archived"];export{T as ActionsData,t as Archived,s as Default,a as Pinned,S as __namedExportsOrder,D as default};
