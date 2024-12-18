import cn from 'classnames';
import Image from 'next/image';

type AvatarProps = {
  className?: string;
  src: string;
  title: string;
  [key: string]: unknown;
};

const Avatar: React.FC<AvatarProps> = ({ src, className, title, ...rest }) => {
  return (
    <div
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-full border border-border-100',
        className
      )}
      {...rest}
    >
      <Image
        alt={title}
        src={src}
        fill
        sizes="(max-width: 768px) 100vw"
        priority={true}
      />
    </div>
  );
};

export default Avatar;
