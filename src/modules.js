console.log(process.env.NODE_ENV)
const LOCAL_IP_ADDRESS = 'localhost'
const SERVE_IP_ADDRESS = 'http://blog.matserw.com'
export const modules = {
  // 'module-html': `http://${
  //   process.env.NODE_ENV === 'development' ? LOCAL_IP_ADDRESS : SERVE_IP_ADDRESS
  // }/module-html/main.js`,
  // 'module-css': `http://${
  //   process.env.NODE_ENV === 'development' ? LOCAL_IP_ADDRESS : SERVE_IP_ADDRESS
  // }/module-css/main.js`,
  'module-html':
    process.env.NODE_ENV === 'development'
      ? `http://${LOCAL_IP_ADDRESS}:9001/module-html/main.js`
      : `${SERVE_IP_ADDRESS}/module-html/main.js`,
  'module-css':
    process.env.NODE_ENV === 'development'
      ? `http://${LOCAL_IP_ADDRESS}:9002/module-css/main.js`
      : `${SERVE_IP_ADDRESS}/module-css/main.js`,
}
