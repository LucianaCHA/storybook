import{j as _}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const o=({label:t,size:x="normal",allCaps:h=!1,color:v="text-primary",fontColor:C=void 0})=>_.jsx("span",{className:`label ${x} ${h?"all-caps":""} ${v}`,style:{color:C},children:t});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Label to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"True if the label should be all caps",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Color of the label text",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:"undefined"},description:"Choose the color of the label text!",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Example/My label",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{description:"Texto del label",defaultValue:"Hello World",control:"text"},size:{description:"Tamaño del label",defaultValue:"medium",control:{type:"inline-radio",options:["normal","h1","h2","h3"]}}}},e={args:{label:"Hello World"}},a={args:{label:"Hello World",allCaps:!0}},l={args:{label:"Hello World",color:"text-secondary"}},r={args:{label:"Hello World"}};var s,n,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Hello World'
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Hello World',
    allCaps: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,m,y;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Hello World',
    color: 'text-secondary'
  }
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Hello World'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const q=["Default","AllCaps","Secondary","CustomColor"];export{a as AllCaps,r as CustomColor,e as Default,l as Secondary,q as __namedExportsOrder,V as default};
