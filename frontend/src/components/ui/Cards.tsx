// divが受け取れるすべてのHTML属性をPropsの型とする
type CardProps = React.HTMLAttributes<HTMLDivElement>;

// FCを使わないモダンな書き方
export const Card = ({ children, ...rest }: CardProps) => {
  return (
    // Viewの代わりにdivを使う
    // classNameやstyleはrest経由で渡される
    <div {...rest}>{children}</div>
  );
};
