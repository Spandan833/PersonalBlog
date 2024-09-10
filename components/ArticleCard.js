import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const ArtilcleCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <div className="h-56 sm:h-64">
          <Image
            src={post.image || "/images/placeholder.jpg"}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
            {post.category || "Article"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{post.date}</span>
          <Clock size={16} className="ml-4 mr-2" />
          <span>{post.readTime || "5 min read"}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <Link href={`/posts/${post.id}`}>
            <a className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 inline-flex items-center group">
              Read More
              <ArrowRight
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                size={18}
              />
            </a>
          </Link>
          <div className="flex -space-x-2">
            {post.authors &&
              post.authors.map((author, index) => (
                <Image
                  key={index}
                  src={author.avatar || "/images/default-avatar.jpg"}
                  alt={author.name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtilcleCard;
