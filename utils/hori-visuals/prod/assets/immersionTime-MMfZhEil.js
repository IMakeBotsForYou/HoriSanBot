import{j as t}from"./index-39spj21b.js";import{_ as i}from"./react-apexcharts.min-CmTtIUJZ.js";const n=()=>{const a=window.puppeteerData.data,s=[{name:"Watchtime",data:a.map(e=>e.watchTime)},{name:"Listening",data:a.map(e=>e.listeningTime)},{name:"Reading",data:a.map(e=>e.readingTime)}],o={chart:{type:"bar",height:350,toolbar:{show:!1},animations:{enabled:!1},zoom:{enabled:!1},stacked:!0},plotOptions:{bar:{horizontal:!1,columnWidth:"75%",borderRadius:0}},dataLabels:{enabled:!1},stroke:{show:!1},grid:{show:!0,borderColor:"#333",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},xaxis:{categories:a.map(e=>a.indexOf(e)%5===0?e.date:""),labels:{rotate:0,rotateAlways:!1,style:{fontSize:"25px",colors:"#ffffff"}},axisBorder:{show:!1},axisTicks:{show:!0}},yaxis:{title:{text:"Minutes",style:{fontSize:"30px"},offsetX:-15},labels:{style:{fontSize:"30px",colors:["#fff"]},formatter:e=>`${e}`}},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}},colors:["#00E396","#0090FF","#FF4560"],legend:{fontSize:"40px",fontWeight:700,offsetY:-15}};return t.jsx("div",{className:"bg-black w-[1250px] h-[900px] p-4",children:t.jsx(i,{options:o,series:s,type:"bar",height:800})})};export{n as default};