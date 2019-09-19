/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = ''
let routerMode = 'hash'

if (process.env.NODE_ENV === 'development') {
  baseUrl = '//192.168.101.172:8017'
} else {
  baseUrl = '//192.168.101.172:8017'
}

export {
  baseUrl,
  routerMode
}
