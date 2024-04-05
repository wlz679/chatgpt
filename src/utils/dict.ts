export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  show?: boolean;
}

export interface StringKey {
  [key: string]: string; // 添加字符串索引签名
}

// 映射转下拉选项
const mapToOptions = (source: any) => {
  return Object.entries(source).map((item) => ({
    label: item[1] as string,
    value: item[0],
  }));
};


//指标精度映射
export const AggregationPrecisionMap: StringKey = {
  "15minute": "15分钟",
  "30minute": "30分钟",
  "1hour": "1小时",
  "1day": "1天",
};
// 指标精度下拉选项
export const AggregationPrecisionOptions = mapToOptions(
  AggregationPrecisionMap
);

//小时级别指标精度映射
export const AgHoursPrecisionMap: StringKey = {
  "15minute": "15分钟",
  "30minute": "30分钟",
  "1hour": "1小时",
};
// 小时级别指标精度下拉选项
export const AgHoursPrecisionOptions = mapToOptions(AgHoursPrecisionMap);

//溯源设备类型映射
export const suyuanDeviceTypeMap: StringKey = {
  suyuan: "溯源设备",
};
// 溯源设备类型下拉选项
export const suyuanDeviceTypeOptions = mapToOptions(suyuanDeviceTypeMap);
//溯源传感器类型映射
export const suyuanSensorTypeMap: StringKey = {
  ywkg: "液位开关",
};
// 溯源传感器类型下拉选项
export const suyuanSensorTypeOptions = mapToOptions(suyuanSensorTypeMap);

//三合一设备类型映射
export const threeInOneDeviceTypeMap: StringKey = {
  "three-in-one": "三合一设备",
};
// 三合一设备类型下拉选项
export const threeInOneDeviceTypeOptions = mapToOptions(
  threeInOneDeviceTypeMap
);
//三合一传感器类型映射
export const threeInOneSensorTypeMap: StringKey = {
  ylywj: "压力液位计",
  ldywj: "雷达液位计",
  llj: "流量计",
  ddly: "电导率仪",
};
// 三合一传感器类型下拉选项
export const threeInOneSensorTypeOptions = mapToOptions(
  threeInOneSensorTypeMap
);


//监控指标映射
export const monitorMetricsMap: StringKey = {
  yw: "液位",
  kg: "空高",
  ss: "水深",
};
// 监控指标下拉选项
export const monitorMetricsOptions = mapToOptions(monitorMetricsMap);


// 雷达液位计对应指标映射
export const ldywjMtricesMap: StringKey = {
  kg: "空高",
  ss: "水深",
  yw: "液位",
  wd: "温度",
  dy: "电压",
  xhqd: "信号强度",
};
// 雷达液位计对应指标下拉选项
export const ldywjMetricsOptions = mapToOptions(ldywjMtricesMap);

// 压力液位计对应指标
const ylywjMtricesMap: StringKey = {
  kg: "空高",
  ss: "水深",
  yw: "液位",
  wd: "温度",
  dy: "电压",
  xhqd: "信号强度",
};
// 压力液位计对应指标下拉选项
export const ylywjMetricsOptions = mapToOptions(ylywjMtricesMap);

// 流量计对应指标
const lljMtricesMap: StringKey = {
  kg: "空高",
  ss: "水深",
  yw: "液位",
  ls: "流速",
  ll: "流量",
  wd: "温度",
  dy: "电压",
  xhqd: "信号强度",
  hhj: "横滚角",
  cjz: "垂直角",
};
// 流量计对应指标下拉选项
export const lljMetricsOptions = mapToOptions(lljMtricesMap);

// 电导率仪对应指标
const ddlyMtricesMap: StringKey = {
  ddl: "电导率",
  tds: "TDS",
  yd: "盐度",
  wd: "温度",
  dy: "电压",
  xhqd: "信号强度",
};
// 电导率仪对应指标下拉选项
export const ddlyMetricsOptions = mapToOptions(ddlyMtricesMap);

// 液位开关对应指标
const ywkgMtricesMap: StringKey = {
  water: "有水情况",
  dy: "电压",
  xhqd: "信号强度",
  water_near: "有水情况（近端）",
  water_far: "有水情况（远端）",
};
// 液位开关指标下拉选项
export const ywkgMetricsOptions = mapToOptions(ywkgMtricesMap);

// 液位计对应指标
const ywjMtricesMap: StringKey = {
  ...ldywjMtricesMap,
  ...ylywjMtricesMap
};
// 液位计指标下拉选项
export const ywjMetricsOptions = mapToOptions(ywjMtricesMap);


//三合一指标映射
export const threeInOneMetricsMap: StringKey = {
  ...ywjMtricesMap,
  ...lljMtricesMap,
  ...ddlyMtricesMap
};
// 三合一指标下拉选项
export const threeInOneMetricsOptions = mapToOptions(threeInOneMetricsMap);


//溯源指标映射
export const suyuanQuotaMap: StringKey = {
  ...ywjMtricesMap
};
// 溯源指标下拉选项
export const suyuanQuotaOptions = mapToOptions(suyuanQuotaMap);


//全量指标映射
export const fullMetricsMap: StringKey = {
  ...ywjMtricesMap,
  ...lljMtricesMap,
  ...ddlyMtricesMap,
  PipeBottomElevation: "管底坡道线",
  GroundElevation: "地面坡降线",
  WellDepth: "检查井井深",
};
// 全量指标下拉选项
export const fullMetricsOptions = mapToOptions(fullMetricsMap);

export const fullMetricsUnitMap: StringKey = {
  yw: "m",
  kg: "m",
  ss: "m",
  wd: "℃",
  ls: "m/s",
  ll: "m³/s",
  hhj: "°",
  cjz: "°",
  tds: "μS/cm",
  yd: "‰",
  water: "",
  dy: "v",
  xhqd: "dBm",
  ddl:"μS/cm",
};

//表格传感器类型映射
export const tableSensorTypeMap: StringKey = {
  ywj: "液位计",
  llj: "流量计",
  ddly: "电导率仪",
  // ywkg: "液位开关",
};
// 表格传感器类型下拉选项
export const tableSensorTypeOptions = mapToOptions(tableSensorTypeMap);

//一张图传感器类型映射
export const oneMapSensorTypeMap: StringKey = {
  ywj: "液位计",
  llj: "流量计",
  ddly: "电导率仪",
};
// 一张图传感器类型下拉选项
export const oneMapSensorTypeOptions = mapToOptions(oneMapSensorTypeMap);

//排水分区映射
export const drainageZoneMap: StringKey = {
  ywkg: "液位开关",
  ywj: "液位计",
};

// 排水分区下拉选项
export const drainageZoneOptions = mapToOptions(drainageZoneMap);

//点位标签映射
export const pointTagMap: StringKey = {
  zd: "重点点位",
  dyh: "大运会点位",
};
// 点位标签下拉选项
export const pointTagOptions = mapToOptions(pointTagMap);

//聚合函数映射
export const AggregationMap: StringKey = {
  LAST: "最新值 LAST",
  MEAN: "均值 MEAN",
  MEDIAN: "中位数 MEDIAN",
  SPREAD: "最大最小差值 SPREAD",
  SUM: "和值 SUM",
  FIRST: "最老值 FIRST",
  MAX: "最大值 MAX",
  MIN: "最小值 MIN",
};
// 聚合函数下拉选项
export const AggregationOptions = mapToOptions(AggregationMap);

export const date_shortcuts = [
  {
    text: "当天",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      return [start, end];
    },
  },
  {
    text: "最近24小时",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      return [start, end];
    },
  },
  {
    text: "最近三天",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setHours(0);
      start.setMinutes(0);
      start.setHours(0);
      start.setTime(start.getTime() - 3600 * 1000 * 3 * 24);
      return [start, end];
    },
  },
  {
    text: "最近一周",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "最近一月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "最近三月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

//报警类型映射
export const suyuanWarningTypeMap: StringKey = {
  ALARM_SUYUAN: "溯源报警",
};
export const monitorWarningTypeMap: StringKey = {
  ALARM_YW_RIS_FAST: "液位上涨过快",
  ALARM_YW_RUN_OVER: "空高报警",
  // ALARM_DATA_LOST: "设备数据丢失",
};
export const commonWarningTypeMap: StringKey = {
  ALARM_OFFLINE: "设备离线",
  ALARM_RTU: "RTU报警",
};
export const warningTypeMap: StringKey = {
  ...suyuanWarningTypeMap,
  ...monitorWarningTypeMap,
  ...commonWarningTypeMap,
};

// 报警类型下拉选项
export const suyuanWarningTypeOptions = mapToOptions({
  ...suyuanWarningTypeMap,
  ...commonWarningTypeMap,
});

export const monitorWarningTypeOptions = mapToOptions({
  ...monitorWarningTypeMap,
  ...commonWarningTypeMap,
});

// //报警类型映射
// export const warningTypeMap: StringKey = {
//   ...suyuanWarningTypeMap,
//   ...monitorWarningTypeMap,
//   ...commonWarningTypeMap
// };
// // 报警类型下拉选项
// export const warningTypeOptions = mapToOptions(warningTypeMap);

//报警方式映射
export const warningMethosMap: StringKey = {
  PHONE: "电话通知",
  SMS: "短信通知",
  // VOICE: "声音通知",
};
// 报警方式下拉选项
export const warningMethosOptions = mapToOptions(warningMethosMap);

//警报延时映射
export const alarmDelayMap: StringKey = {
  "5m": "5分钟",
  "15m": "15分钟",
  "30m": "30分钟",
  "1h": "1小时",
  "12h": "12小时",
  "1d": "1天",
  "1w": "1周",
};
// 警报延时下拉选项
export const alarmDelayOptions = mapToOptions(alarmDelayMap);

// 角色映射
export const roleMap: StringKey = {
  Admin: "超级管理员",
  User: "普通用户",
};
// 角色下拉选项
export const roleOptions = mapToOptions(roleMap);

// 排水户类型映射
export const duTypeMap: StringKey = {
  residential: "住宅",
  office: "办公区",
  school: "学校",
  hospital: "医院",
};
// 排水户类型下拉选项
export const duTypeOptions = mapToOptions(duTypeMap);

// 井盖类型映射
export const wellLidTypeMap: StringKey = {
  iron: "铸铁",
  concrete: "砼",
};
// 井盖类型下拉选项
export const wellLidTypeOptions = mapToOptions(wellLidTypeMap);

// 井盖类型映射
export const ConditionMap: StringKey = {
  OR: "或",
  AND: "且",
};
// 井盖类型下拉选项
export const ConditionOptions = mapToOptions(ConditionMap);

// 报警状态映射
export const alarmStatusMap: StringKey = {
  Alarming: "报警中",
  Recover: "已恢复",
};
// 报警状态下拉选项
export const alarmStatusOptions = mapToOptions(alarmStatusMap);

// 短信报警处理状态映射
export const alarmExecuteMap: StringKey = {
  NotExecuted: "未处理",
  Executed: "处理成功",
  Failed: "处理失败",
};
// 短信报警处理状态下拉选项
export const alarmExecuteOptions = mapToOptions(alarmExecuteMap);

// 电话报警处理状态映射
export const phoneAlarmExecuteMap: StringKey = {
  NotExecuted: "未处理",
  Answered: "未接听",
  Busy: "线路异常或繁忙",
  Rejection: "被叫拒接/振铃未接/占线/关机/空号",
  Arrears: "服务欠费",
};
// 短信报警处理状态下拉选项
export const phoneAlarmExecuteOptions = mapToOptions(phoneAlarmExecuteMap);

// 设备运行状态映射
export const deviceStatusRunningMap: StringKey = {
  Running: "运行中",
  Closing: "关闭中",
  Closed: "已关闭",
  Setting: "设置中",
};
// 设备运行状态下拉选项
export const deviceStatusRunningOptions = mapToOptions(deviceStatusRunningMap);

// 设备控制修改状态映射
export const deviceCommandStatusCreatedMap: StringKey = {
  Created: "等待设备响应",
  Success: "执行指令成功",
  Fail: "指令执行失败",
};
// 设备控制修改状态下拉选项
export const deviceCommandStatusCreatedOptions = mapToOptions(
  deviceCommandStatusCreatedMap
);
// 是否绑定状态映射
export const deviceBindOperateMap: StringKey = {
  Bind: "关联",
  Unbind: "取消关联",
};
// 是否绑定下拉选项
export const deviceBindOperateOptions = mapToOptions(deviceBindOperateMap);

// 报警流程状态映射
export const alarmProcessStatusMap: StringKey = {
  Read: "已知悉",
  Unread: "未知悉",
  Processed: "已处理",
};
// 报警流程状态下拉选项
export const alarmProcessStatusOptions = mapToOptions(alarmProcessStatusMap);

// 排水厂
export const DrainFactoryNameMap: StringKey = {
  三厂: "三厂",
  四厂: "四厂",
  五厂: "五厂",
  六厂: "六厂",
  七厂: "七厂",
  八厂: "八厂",
  九厂: "九厂",
  十厂: "十厂",
  十厂二期: "十厂二期",
  骑龙厂: "骑龙厂",
  七厂二期: "七厂二期",
};
// 设备控制修改状态下拉选项
export const DrainFactoryNameOptions = mapToOptions(DrainFactoryNameMap);

// 故障类型映射
export const brokenTypeMap: StringKey = {
  Damage: "损坏",
  Lack: "缺电",
  Other: "其他异常",
};
// 故障类型下拉选项
export const brokenTypeOptions = mapToOptions(brokenTypeMap);

// 维护类型映射
export const maintenanceTypeMap: StringKey = {
  Breakdown: "故障",
  DailyCheck: "日常巡检",
};
// 维护类型下拉选项
export const maintenanceTypeOptions = mapToOptions(maintenanceTypeMap);
