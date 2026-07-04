export function Footer() {
  return (
    <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto gap-8">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
          © 2026 Amit Kumar.
        </div>
        <div className="flex gap-10 text-xs uppercase tracking-[0.2em] font-semibold">
          <a className="text-stone-500 hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Portfolio</a>
          <a className="text-stone-500 hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href={process.env.NEXT_PUBLIC_GITHUB_URL}>GitHub</a>
          <a className="text-stone-500 hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>LinkedIn</a>
          <a className="text-stone-500 hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href={process.env.NEXT_PUBLIC_LEETCODE_URL}>LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
