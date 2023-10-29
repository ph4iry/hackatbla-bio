export default function Link({ title, caption, href, className } : { title: string, caption: string, href: string, className: string }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={"block transition hover:scale-110 hover:shadow-xl p-3 text-center w-full text-white rounded-lg " + className}>
      <span className="block text-3xl font-bold">{title.toUpperCase()}</span>
      <span className="block text-base font-semibold">{caption.toUpperCase()}</span>
    </a>
  )
}