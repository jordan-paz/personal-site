import Layout from "../Layout";
import Image from "next/image";
import Link from "next/link";

export default function HomePage({ doodle, posts }) {
  // console.log(props);

  return (
    <Layout>
      {/* HERO */}
      <div className="bg-white flex flex-col  pt-24">
        <div className="flex items-end">
          <div className="border-orange border-solid border-2 p-0.5 rounded-full w-20 h-20 mr-3">
            <Image
              src="/profile-pic.jpeg"
              width="80"
              height="80"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="ml-1">Hey there, I'm</p>
            <h4>Jordan Paz</h4>
          </div>
        </div>
        <p className="mt-3">
          Welcome to my corner of the internet! I write stuff, mostly about
          code. I also draw things.
        </p>
      </div>

      {/* LATEST DOODLE */}
      <div className="mt-20">
        <h4 className="mb-4">Latest Doodle</h4>
        <Image src={doodle.image.asset.url} width="325" height="325" />
        <div className="mt-4">
          <Link href="/">
            <a className="text-orange underline font-semibold">
              View all Doodles
            </a>
          </Link>
        </div>
      </div>

      {/* POSTS */}
      <div className="mt-20">
        <h4 className="mb-4">Posts</h4>
        <ul className="list-disc list-inside">
          {posts.map((post) => (
            <li className="mt-4">
              <h5 className="text-orange underline inline">{post.title}</h5>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/">
            <a className="text-orange underline font-semibold">
              View all Posts
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
