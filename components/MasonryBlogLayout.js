import React from "react";
import Image from "next/image";
import Link from "next/link";

const MasonryBlogLayout = ({ allPostsData }) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {allPostsData.map(
        ({ id, date, title, author, excerpt, image }, index) => (
          <div
            key={id}
            className={`break-inside-avoid bg-white shadow-md rounded-lg overflow-hidden ${
              index % 5 === 0 ? "row-span-2" : ""
            }`}
          >
            <div
              className={`${
                index % 5 === 0 ? "h-96" : "h-48"
              } bg-gray-200 relative`}
            >
              <Image
                src={image || "/images/placeholder.jpg"}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">{title}</h2>
              <p className="text-sm text-gray-600 mb-1">{`${author} - ${date}`}</p>
              <p className="text-gray-700 mb-2">{excerpt}</p>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-600 hover:underline">Read more</a>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MasonryBlogLayout;
