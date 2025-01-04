import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 w-full">
      <h1 className="text-4xl pt-2 pb-4 text-center">Electron As Wrapper</h1>

      <ol className="list-decimal w-3/4 mx-auto">
        <li className="text-md pb-2">
          An Experiment on Wrapping up electron app with Next.js To run the
          electron app as a desktop application; follow the below steps,
          Initially, clone the repo and run the below command in root directory.
        </li>
        <code typeof="bash" className="p-1 bg-gray-100 text-black rounded-md">
          npm&nbsp;install && npm&nbsp;run&nbsp;dev
        </code>
        <li className="text-md py-2">
          It will start the nextjs development server. Now, open another
          terminal and run the below command.
        </li>
        <code className="p-1 bg-gray-100 text-black rounded-md" typeof="bash">
          cd&nbsp;electron-wrapper && npm&nbsp;install && npm&nbsp;run&nbsp;dev
        </code>
        <li className="text-md py-2">
          It will start the electron app. Now, you can see the electron app
          running as a wrapper for the nextjs app.
        </li>
      </ol>

      <footer className="mt-[calc(22rem)] text-center">
        <Link
          href="https://github.com/AVidhanR/ElectronExp"
          className="hover:underline hover:text-blue-400"
        >
          GitHub Repo
        </Link>{" "}
        <br />
        Made by{" "}
        <Link
          href={"https://linkedin.com/in/AVidhanR"}
          className="hover:transition-colors hover:text-blue-400"
        >
          A&nbsp;Vidhan Reddy
        </Link>
      </footer>
    </div>
  );
}
