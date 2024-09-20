import fs from "fs";
import path from "path";
import gm from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export default function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterresult = gm(fileContents);
    return {
      id,
      ...matterresult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      },
    };
  });
}
// export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory);

//     return fileNames.map((fileName) => {
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, ''),
//         },
//       };
//     });
//   }

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileData = fs.readFileSync(fullPath, "utf8");

  const matterResult = gm(fileData);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}
