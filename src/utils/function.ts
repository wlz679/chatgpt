// @ts-nocheck
import dayjs from "dayjs";
import {
  StringKey,
  fullMetricsUnitMap,
  Option,
  fullMetricsMap,
  date_shortcuts,
} from "./dict";
import { ElMessage } from "element-plus";
import html2canvas from "html2canvas";
// import FileSaver from "file-saver";
import * as XLSX from "xlsx";

// 错误处理
export function handle_err(
  error: any,
  route_name?: string,
  appendMessage = ""
) {
  console.log("err 111-->", error);

  if (error.Code) {
    if (error.Code == 223) {
      // window.location.href = "/login";
    } else {
      ElMessage({
        message: appendMessage
          ? appendMessage + ":" + error.Message
          : error.Message,
        type: "error",
      });
    }
  } else if (error.Message) {
    ElMessage({
      message: appendMessage
        ? appendMessage + ":" + error.Message
        : error.Message,
      type: "error",
    });
  } else {
    ElMessage({
      message: error,
      type: "error",
    });
  }
}

export function handle_warn(message: any) {
  const options: any = {
    type: "warning",
    message: message,
  };
  ElMessage.warning(options);
}

export function handle_succ(message: any, cb?: any) {
  const options = {
    type: "success",
    message: message,
    onClose: () => {
      cb && cb();
    },
  };

  ElMessage.success(options);
}

// 登录重定向
export const toLogin = (router: any, route?: any) => {
  console.log(route);

  // if (!route) {
  if (router.currentRoute.value.path == `/login`) {
    return;
  }
  router.push({
    path: `/login`,
  });
  return;
  // }

  // router.push({
  //   path: `/login`,
  //   query: {
  //     redirect: route.path,
  //     query: JSON.stringify(route.query),
  //   },
  // });
  // return;
};

// 日期格式转时间戳（秒）
export const DateToTamp = (v: any) => {
  return Math.floor(new Date(v).getTime() / 1000);
};

// 日期格式转字符串格式
export const DateToString = (v: any, format = "YYYY-MM-DD HH:mm:ss") => {
  console.log(v);
  return dayjs(v).format(format);
};

// 时间戳(秒级)转日期时间格式
export const tampToTime = (
  timestamp: number | string,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  if (typeof timestamp !== "number") return;
  return dayjs.unix(timestamp).format(format);
};

// 过滤多余入参，保留有值的参数
export const filterParams = (requestParams: any) => {
  const params: StringKey = {};
  const fn = (obj) => {
    for (let key in obj) {
      const value = obj[key];
      if (value == null) {
        // null和undefined跳过
        continue;
      } else if (typeof value === "string") {
        if (value === "") {
          // 空字符串跳过
          continue;
        } else {
          // 非空字符串直接赋值
          params[key] = value;
        }
      } else if (typeof value === "number") {
        if (value === "NaN") {
          // NaN跳过
          continue;
        } else {
          // 非NaN直接赋值
          params[key] = value;
        }
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          // 空数组跳过
          continue;
        } else {
          // 非空数组直接赋值
          params[key] = value;
        }
      } else if (typeof value === "object") {
        if (Object.keys(value).length === 0) {
          // 空对象跳过
          continue;
        } else {
          params[key] = value;
        }
      } else if (typeof value === "boolean") {
        // 默认boolean都会是空string，当为boolean时需要带上
        params[key] = value;
      }
    }
  };
  fn(requestParams);
  return params;
};

// 手机号验证
export const checkPhone = (phone: string) => {
  var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

  if (reg.test(phone) == false) {
    return false;
  }
  return true;
};

// 网址验证（包含协议，端口）
export const checkWebsitePort = (website: string) => {
  var reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;
  return reg.test(website);
};

// 网址验证（包含协议）
export const checkWebsite = (website: string) => {
  var reg =
    /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  return reg.test(website);
};

// 域名验证（不包含协议）
export const checkDomain = (website: string) => {
  var reg = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/;
  return reg.test(website);
};

// html保存为图片
export const htmlToImage = (
  target: string,
  container: string,
  fileName: string
) => {
  const download_btn = document.querySelector(target) as HTMLElement;
  if (download_btn) {
    download_btn.style.visibility = "hidden";
    const borderStyle = "1px solid #dcdfe6";
    const inputWraps = document.querySelectorAll(
      ".el-input__wrapper"
    ) as NodeListOf<HTMLElement>;
    [...inputWraps].forEach((input) => {
      input.style.border = borderStyle;
      input.style.boxShadow = "none";
    });

    const containerDom = document.querySelector(container) as HTMLElement;
    if (containerDom) {
      html2canvas(containerDom).then(function (canvas) {
        var img = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        // 创建a标签，实现下载
        var creatIMg = document.createElement("a");
        creatIMg.download = fileName; // 设置下载的文件名，
        creatIMg.href = img; // 下载url
        document.body.appendChild(creatIMg);
        creatIMg.click();
        creatIMg.remove(); // 下载之后把创建的元素删除
        download_btn.style.visibility = "visible";
      });
    }

    [...inputWraps].forEach((input) => {
      input.style.border = "0 none";
      input.style.boxShadow = "0 0 0 1px #dcdfe6 inset";
    });
  }
};

// 表格转为excel
export const exportExcel = (
  name: string,
  tableNames: string[] | string = [],
  sheetNames: string[] | string = []
) => {
  let wb = XLSX.utils.book_new();

  if (Array.isArray(tableNames)) {
    for (let i = 0; i < tableNames.length; i++) {
      let table = document.querySelector(tableNames[i]);
      let ws = XLSX.utils.table_to_sheet(table);
      XLSX.utils.book_append_sheet(wb, ws, sheetNames[i]);
    }
  } else {
    let table = document.querySelector(tableNames);
    let ws = XLSX.utils.table_to_sheet(table);
    XLSX.utils.book_append_sheet(wb, ws, sheetNames);
  }

  XLSX.writeFile(wb, name);
};

// 正向排序（从小到大）
export const sortDownDate = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return dayjs(a, "YYYY-MM-DD").isBefore(b, "YYYY-MM-DD") ? -1 : 1;
    // return Date.parse(a) - Date.parse(b);
  }
};

// 反向排序（从大到小）
export const sortUpDate = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return dayjs(a, "YYYY-MM-DD").isAfter(b, "YYYY-MM-DD") ? -1 : 1;
  }
};

export const strTime = (t) => {
  var d = new Date();
  d.setTime(t * 1000);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var hours = ("0" + d.getHours()).slice(-2);
  var minutes = ("0" + d.getMinutes()).slice(-2);
  var seconds = ("0" + d.getSeconds()).slice(-2);
  return (
    d.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};

export const listhours = (start, end) => {
  const strhours = [];
  const starttime = new Date(start + "T00:00:00");
  const endtime = new Date(end + "T23:59:59");
  while (starttime.getTime() <= endtime.getTime()) {
    strhours.push(strTime(starttime.getTime() / 1000));
    starttime.setHours(starttime.getHours() + 1);
  }
  return strhours;
};

const getFileName = (filePath: any, name: string) => {
  let fileName;
  if (name) return name;
  if (!filePath) return "";
  if (typeof path === "string") {
    // 使用split()根据斜杠分割路径，然后使用pop()获取数组的最后一个元素（文件名）
    return filePath.split("/").pop();
  } else {
    throw new Error("文件名不合法");
  }
};

// 下载文件
export const download = (path: any, name = "") => {
  const fileName = getFileName(name);

  if (fileName.endsWith(".pdf")) {
    window.open(path, "_blank");
  } else {
    let downloadDom = document.createElement("a");
    downloadDom.href = path;
    downloadDom.download = fileName; //--不是必须 若需要【前端重命名文件夹】的话这句代码就需要
    document.body.appendChild(downloadDom);
    downloadDom.click();
    document.body.removeChild(downloadDom);
  }
};

export const getDateShortcuts = (selected: any[]) => {
  if (!selected) {
    return date_shortcuts;
  }
  return date_shortcuts.filter((item) => {
    return selected.includes(item.text) ? true : false;
  });
};

// 秒数转换为 "天-小时-分钟"显示
export const formatSecond = (second, defaultValue = "-") => {
  let time = second;
  if (time <= 0) return defaultValue;

  var days = Math.floor(time / (24 * 60 * 60));
  time = time - days * 24 * 60 * 60;
  var hours = Math.floor(time / (60 * 60));
  time = time - hours * 60 * 60;
  var minites = Math.floor(time / 60);
  time = time - minites * 60;
  var seconds = Math.floor(time);

  var str = seconds + "秒";

  if (minites > 0) {
    if (seconds > 0) {
      str = minites + "分钟" + str;
    } else {
      str = minites + "分钟";
    }
  }
  if (hours > 0) {
    if (minites > 0) {
      str = hours + "小时" + str;
    } else {
      str = hours + "小时";
    }
  }
  if (days > 0) {
    if (hours > 0) {
      str = days + "天" + str;
    } else {
      str = days + "天" + str;
    }
  }

  return str;
};

// 下载流文件
export const downloadBlob = (blob, fileName?: string) => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName); // 你可以设置你想要的文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url); // 释放URL对象
};
