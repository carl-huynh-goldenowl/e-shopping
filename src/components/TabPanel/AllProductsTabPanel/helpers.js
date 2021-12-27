const replacePathFmt = (path, key) => {
  return path.replace(/\/:.*/g, `/${key}`)
}
export default replacePathFmt
