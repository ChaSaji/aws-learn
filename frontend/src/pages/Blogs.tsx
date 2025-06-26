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
  const handleCardClick = (blogId: string) => {
    // TODO: ここはブログ詳細ページへの遷移に置き換えることを想定
    console.log(`カードがクリックされました！ ID: ${blogId}`);
  };
  const handleUsernameClick = (userName: string) => {
    // TODO: ここはユーザープロフィールページへの遷移に置き換えることを想定
    console.log(`ユーザー名がクリックされました！ ユーザー名: ${userName}`);
  };
  return (
    <div>
      <h1>ブログの一覧</h1>
      {/* dataがnull時の挙動をどうするか決めたい */}
      <div className={styles.blogsList}>
        {blogsData?.map((blogsData) => (
          <BlogCard
            onCardClick={() => handleCardClick(blogsData.id)}
            onUsernameClick={() => handleUsernameClick(blogsData.userName)}
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
