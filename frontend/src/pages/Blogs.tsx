import { BlogCard } from '../features/blogs/BlogCard';
import styles from './Blogs.module.css';

interface BlogsData {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  picture: number;
}

function Blogs() {
  // TODO: ここはAPIからのデータ取得に置き換えることを想定
  const blogsData: BlogsData[] | null = [
    {
      id: '1',
      title:
        '2行を超えるなが～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～いブログタイトル',
      createdAt: new Date(),
      updatedAt: new Date(),
      userName:
        'ちょっとなが～～～～～～～～いユーザー名(名前って文字数制限あるの？)',
      picture: 1,
    },
    {
      id: '2',
      title: 'そこそこ普通のブログタイトル',
      createdAt: new Date(),
      updatedAt: new Date(),
      userName: 'そこそこ普通のユーザー名',
      picture: 2,
    },
    {
      id: '3',
      title:
        '2行は超えないちょっとなが～～～～～～～～～～～～～～～～～～～～～～～いブログタイトル',
      createdAt: new Date(),
      updatedAt: new Date(),
      userName: '適当ユーザー名',
      picture: 3,
    },
  ];

  return (
    <div>
      <h1>ブログの一覧</h1>
      {/* dataがnull時の挙動をどうするか決めたい */}
      <div className={styles.blogsList}>
        {blogsData?.map((blogsData) => (
          <BlogCard
            key={blogsData.id}
            id={blogsData.id}
            title={blogsData.title}
            userName={blogsData.userName}
            createdAt={blogsData.createdAt}
            updatedAt={blogsData.updatedAt}
            picture={blogsData.picture}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
