import { useTransition } from 'react';

type TabButtonProps = {
  onClick?: () => void;
  title: string;
  variant: 'primary' | 'secondary';
};

const TabButton = ({
  onClick,
  ...rest
}: TabButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return <button {...rest} onClick={handleClick} />;
};

export default TabButton;