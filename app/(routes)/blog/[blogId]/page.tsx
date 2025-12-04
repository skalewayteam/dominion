import Blog from "@/components/blog";
import Hero from "@/components/blog/hero";
import SingleBlog from "@/components/singleBlog";
import { Params } from "@/types";
import { Search, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "See how we're empowering the community",
};

const BlogId = async ({ params }: { params: Params }) => {
  const { blogId } = params;

  // const blog = (await getBlogs(blogId)) as blogType;

  return (
    <main className="h-fit">
      <Hero />
      <section className="padding bg-white text-[#111]">
        <section className="flex gap-10 max-w-2xl w-full mx-auto ">
          <section className="flex-[2]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-200 mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Blogs</span>
            </Link>
            <SingleBlog blogId={blogId} />
          </section>
          <section className="lg:flex-1 hidden">
            <section className="px-2 w-full mx-auto border flex items-center gap-2 ">
              <input
                type="text"
                className="flex outline-none  flex-1 h-10 "
                placeholder="Search"
              />
              <Search className="text-primary cursor-pointer" />
            </section>
            <ul className="ml-10 mt-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <li className="text-base list-disc" key={index}>
                  Supporting a disabled orphan with a protruding bone
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <Blog />
    </main>
  );
};

export default BlogId;
