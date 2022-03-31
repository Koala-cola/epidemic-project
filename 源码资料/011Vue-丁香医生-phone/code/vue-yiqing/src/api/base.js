/**
 * 公共的请求的接口
 * 
 */
const base ={
    host:'http://api.tianapi.com',//天行数据 --疫情病毒
    baseUrl:'https://yupn.api.storeapi.net',//挖数据---国内疫情
    covInfo:'/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3',//疫情病毒信息
    chinaData:'/api/94/219?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7',//国内疫情接口
    worldData:'/api/94/220?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7',//世界疫情数据
    city:'/api/94/221',//城市接口

}

export default base;
