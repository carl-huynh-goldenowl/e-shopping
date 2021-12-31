const replacePathFmt = (path, key) => {
  let newPath = "/" + path.replace(/\/:.*/g, `/${key}`)
  return newPath
}
export default replacePathFmt
