/*
 * @Author: fauchard
 * @Date: 2021-11-19 15:24:27
 * @LastEditTime: 2021-12-20 19:26:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_vue\src\utils\request.js
 */
import axios from 'axios'
import router from "@/router";
//request.js请求数据，封装axios方法
const request = axios.create({
    baseURL: "/api",
    timeout: 5000
})

// 请求白名单，如果请求在白名单里面，将不会被拦截校验权限
const whiteUrls = ["/user/login", '/user/register','/news']

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    // 取出sessionStorage里面缓存的用户信息
    let userJson = sessionStorage.getItem("user")
    if (!whiteUrls.includes(config.url)) {  // 校验请求白名单
        // if(!userJson) {
        //     router.push("/login")
        // } else {
        //     let user = JSON.parse(userJson);
        //     config.headers['token'] = user.token;  // 设置请求头
        // }
    }
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        //兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        // 验证token
        // if (res.code === '401') {
        //     console.error("token过期，重新登录")
        //     router.push("/login")
        // }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request

