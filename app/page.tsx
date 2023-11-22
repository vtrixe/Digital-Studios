import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>

      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-red-500 sm:text-6xl'>
          The Goto MarketPlace for high quality styled{' '}
          <span className='text-indigo-600'>
                Digital Components
          </span>
          .
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground '>
          Welcome to Vtrix-Studios . Get Dynamic, styled beautiful assets,
          which are verified to ensure high quality standards.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6 '>

          <Link href={'/products'} className={buttonVariants()}>
            Find the Latest Trending Products
          </Link>
          <Button variant='ghost'>
              We Promise Exellence &rarr;
            </Button>

        </div>
      </div>
    
      </MaxWidthWrapper>

  </>
  )
}
