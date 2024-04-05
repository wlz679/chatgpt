// 申请好的Web端开发者Key，首次调用 load 时必填
export const mapKey = "30bcbcc2d3906cee0368e456f653976e";
export const version = "2.0";

export const baseConfig = {
  key: "30bcbcc2d3906cee0368e456f653976e",
  version: "2.0",
};

// 默认初始化地图配置
export const defaultMapStyle = {
  //设置地图容器id
  zoom: 12, //初始化地图层级
  viewMode: "2D", //是否为3D地图模式
  center: [104.074026, 30.661673], //初始化地图中心点位置
  dragEnable: true, //禁止鼠标拖拽
  scrollWheel: true, //鼠标滚轮放大缩小
  doubleClickZoom: false, //双击放大缩小
  keyboardEnable: true, //键盘控制放大缩小移动旋转
};

// 默认排水分区配置
export const defaultDrainagePolygonStyle = {
  fillColor: "#ccebc5",
  selectFillColor: "FFB800",
  strokeOpacity: 1,
  fillOpacity: 0.5,
  strokeColor: "#2b8cbe",
  strokeWeight: 1,
  strokeStyle: "dashed",
  strokeDasharray: [5, 5],
  bubble: true, // 是否将覆盖物的鼠标或touch等事件冒泡到地图上
};

// 默认label文本配置
export const defaultLabelTextStyle = {
  fillColor: "#a9b2c3",
  // strokeColor: "rgba(255,0,0,0.5)",
  // strokeWidth: 2,
  // padding: [3, 10],
  backgroundColor: "#ffffbf",
  borderColor: "#ccc",
  borderWidth: 3,
};

// 默认线条配置
export const defaultPolylineStyle = {
  strokeWeight: 8, // 线条宽度，默认为 1
  strokeColor: "#00ccff", // 线条颜色
  lineJoin: "round", // 折线拐点连接处样式
  showDir: true,
  zIndex: 5000,

  waterStrokeColor: "#007ba7", // 有水的线条颜色
  paiwuStrokeColor: "#ff6961", // 排污区域颜色
  middleStrokeColor: "#bebebe", // 中间路径颜色
};

// 默认信息窗体配置
export const defaultInfoWindow = {
  isCustom: true, //使用自定义窗体
  anchor: "bottom-center", //信息窗体的三角所在位置
};

// 默认空信息窗口内容
export const defaultInfoWindowContent = `
<div class="card">
  <div class="card-body">
    <img class="icon-info" src="/close.png" style="position:absolute;right:3px;top:3px;" onclick="closeInfo()"/>
    <div class="text-danger">没有可展示的信息</div>
  </div>
</div>`;

export interface ExtDataMetrics {
  water: number;
  online: number;
  isValve: boolean;
  isUnit: boolean;
}

export const getMarkerImg = (extDataMetrics: ExtDataMetrics) => {
  if (extDataMetrics.isUnit) {
    if (extDataMetrics.online == 0 || extDataMetrics.online == 2) {
      return "unit_offline.png";
    }
    if (extDataMetrics.water == 1) {
      return "unit_water.png";
    }
    return "unit_no_water.png";
  }
  // 无设备
  if (extDataMetrics.online == 2) {
    return "no_device_offline.png";
  }

  // 设备离线
  if (extDataMetrics.online == 0) {
    return extDataMetrics.isValve ? "pk_offline.png" : "ywkg_offline.png";
  }
  // 有水
  if (extDataMetrics.water == 1) {
    return extDataMetrics.isValve ? "pk_water.png" : "ywkg_water.png";
  }
  // 无水
  return extDataMetrics.isValve ? "pk_no_water.png" : "ywkg_no_water.png";
};

export const markerWidth = 32;
export const markerHeight = 40;
export const defaultMakerIcon = {
  unit: "unit_no_water.png",
  pk: "pk_no_water.png",
  ywkg: "ywkg_no_water.png",
};

export interface JiankongExtDataMetrics {
  Bind: boolean;
  Online: number;
}
