import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarOne() {
  return (
    <Avatar>
      <AvatarImage
        src='https://avatars.githubusercontent.com/u/124599?v=4'
        alt='@shadcn'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
