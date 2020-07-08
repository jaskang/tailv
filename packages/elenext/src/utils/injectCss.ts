export default function injectCss(css: string, id: string) {
  if (!document.head.querySelector('#' + id)) {
    const node = document.createElement('style')
    node.textContent = css
    node.type = 'text/css'
    node.id = id
    document.head.appendChild(node)
  }
}
