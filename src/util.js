// 得到边界
export function getBoundary (dom, container) {
  const boundaryLeft = dom.offsetLeft - container.offsetLeft
  const boundaryRight = container.offsetWidth - dom.offsetWidth - boundaryLeft
  const boundaryTop = dom.offsetTop - container.offsetTop
  const boundaryBottom = container.offsetHeight - dom.offsetHeight - boundaryTop
  return {
    randomX: [-boundaryLeft, boundaryRight],
    randomY: [-boundaryTop, boundaryBottom]
  }
}