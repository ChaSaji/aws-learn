import styles from './Card.module.css';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const Card = ({ children, className, ...rest }: CardProps) => {
  const combinedClassName = `${styles.card} ${className || ''}`;
  return (
    <div className={combinedClassName} {...rest}>
      {children}
    </div>
  );
};
