import { useState, useEffect } from 'react';

interface BlogsData {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  picture: number;
}

const BlogsData: BlogsData[] | null = [
  {
    id: 1,
    title: 'ブログタイトル1',
    createdAt: new Date(),
    updatedAt: new Date(),
    userName: 'ユーザー名1',
    picture: 1,
  },
  {
    id: 2,
    title: 'ブログタイトル2',
    createdAt: new Date(),
    updatedAt: new Date(),
    userName: 'ユーザー名2',
    picture: 2,
  },
  {
    id: 3,
    title: 'ブログタイトル3',
    createdAt: new Date(),
    updatedAt: new Date(),
    userName: 'ユーザー名3',
    picture: 3,
  },
];

function Blogs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Blogs</h1>
      <p className="text-lg">This page is under construction.</p>
      <ul>
        {/* dataがnullの可能性もあるのでチェック */}
        {BlogsData?.map((BlogsData) => (
          <li key={BlogsData.id}>
            <strong>{BlogsData.title}</strong> ({BlogsData.userName})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
