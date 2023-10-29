
export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-amber-500 to-red-500 text-center flex flex-col justify-center items-center py-8">
      <img
        src="https://ugc.production.linktr.ee/5e8b3832-787a-4c27-a36f-aa313567b220_logo-small.png?io=true&size=avatar"
        alt="hack@BLA profile"
        className="max-h-[10rem] aspect-square rounded-full"
      />
      <h1 className="pt-4 font-bold text-white text-4xl drop-shadow-xl">hack<span className="text-amber-500">@BLA</span></h1>
    </header>
  )
}