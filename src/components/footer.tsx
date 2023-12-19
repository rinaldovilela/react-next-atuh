import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full flex items-center justify-center py-3 bg-green-200">
      <Link
        className="flex items-center gap-1 text-current"
        href="/"
        title="home"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-14 text-green-500">BEMVIVENDO-TI</p>
      </Link>
    </div>
  );
}
