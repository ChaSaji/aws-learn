-- シードデータ挿入
INSERT INTO public.users (id, preferred_username, email, profile, picture)
VALUES 
  ('3476fd9a-0387-49f9-82fd-7c33dcdbb315', 'user1', 'user1@example.com', '初めてのユーザーです', 'https://example.com/profile1.jpg'),
  ('4476fd9a-0387-49f9-82fd-7c33dcdbb316', 'user2', 'user2@example.com', '2番目のユーザーです', 'https://example.com/profile2.jpg');

INSERT INTO public.blog (id, user_sub, title, content, created_at, updated_at)
VALUES 
  (uuid_generate_v4(), '3476fd9a-0387-49f9-82fd-7c33dcdbb315', '初めてのブログ', '## これは最初の投稿です。\nMarkdown形式で書かれています。', '2025-04-01 10:00:00+09', '2025-04-01 10:00:00+09'),
  (uuid_generate_v4(), '3476fd9a-0387-49f9-82fd-7c33dcdbb315', '技術ブログ', '### PostgreSQLとPL/pgSQLについて語る回。\nかなり奥が深いです。', '2025-04-05 09:30:00+09', '2025-04-05 09:30:00+09'),
  (uuid_generate_v4(), '4476fd9a-0387-49f9-82fd-7c33dcdbb316', '旅の記録', '#### 京都の桜がきれいだった話\n![桜の画像](https://example.com/sakura.jpg)', '2025-04-07 18:45:00+09', '2025-04-07 18:45:00+09');
