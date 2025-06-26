import { Card } from '../../components/ui/Card';
import styles from './BlogCard.module.css';

type BlogCardProps = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  picture: number;
  onCardClick: () => void;
  onUsernameClick: () => void;
};

export const BlogCard = ({
  id,
  title,
  createdAt,
  updatedAt,
  userName,
  picture,
  onCardClick,
  onUsernameClick,
}: BlogCardProps) => {
  const createdDate = new Date(createdAt).toLocaleDateString('ja-JP');
  const updatedDate = new Date(updatedAt).toLocaleDateString('ja-JP');
  const profileImageUrl = `https://picsum.photos/id/237/200/`; // サンプル：適宜変更してください
  const handleUsernameClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 親へのイベント伝播をここで止める！
    onUsernameClick(); // 親から渡された関数を実行する
  };
  return (
    <Card className={styles.clickableCard} onClick={onCardClick}>
      <div className={styles.container}>
        <img
          src={profileImageUrl}
          alt={userName}
          className={styles.profileImage}
        />
        <div className={styles.metaContainer}>
          <span className={styles.userName} onClick={handleUsernameClick}>
            {userName}
          </span>
          <span>
            作成日：{createdDate} 更新日：{updatedDate}
          </span>
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Card>
  );
};
