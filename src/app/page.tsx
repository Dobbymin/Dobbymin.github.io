import { Button, PostCard } from '@/shared';
import { Grid } from '@/widgets';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-start justify-start'>
      <div className='flex gap-3 py-2'>
        <Button className='px-2 font-bold'>전체 (49)</Button>
        <Button className='px-2 font-bold' variant='ghost'>
          개발 (3)
        </Button>
        <Button className='px-2 font-bold' variant='ghost'>
          일상 (9)
        </Button>
        <Button className='px-2 font-bold' variant='ghost'>
          회고 (4)
        </Button>
      </div>
      <Grid columns={{ base: 1, md: 2, lg: 4 }} gap={16}>
        <PostCard />
      </Grid>
    </div>
  );
}
