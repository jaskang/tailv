export default function injectCss(id: string, css: string, top: boolean = false) {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.id = id
  style.innerHTML = css
  if (top && head.firstChild) {
    head.insertBefore(style, head.firstChild)
  } else {
    head.appendChild(style)
  }
}
