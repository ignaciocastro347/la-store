// import { useType } from '@/framework/type';
import dynamic from 'next/dynamic';

// const ErrorMessage = dynamic(() => import('@/components/ui/error-message'));
const BannerWithSearch = dynamic(
  () => import('@/components/banners/banner-with-search')
);
// const BannerShort = dynamic(() => import('@/components/banners/banner-short'));
const BannerWithoutSlider = dynamic(
  () => import('@/components/banners/banner-without-slider')
);
// const BannerWithPagination = dynamic(
//   () => import('@/components/banners/banner-with-pagination')
// );

const MAP_BANNER_TO_GROUP: Record<string, any> = {
  classic: BannerWithSearch,
  // modern: BannerShort,
  minimal: BannerWithoutSlider,
  // standard: BannerWithSearch,
  // compact: BannerWithPagination,
  // default: BannerWithSearch,
};

// banners {
//   title
//   description
//     image {
//     id
//     thumbnail
//     original
//   }
// }
const banners = [
  {
    title: 'title',
    description: 'description',
    image: {
      id: 'id',
      thumbnail: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=1920&q=75",
      original: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=1920&q=75",
    },
  },
  {
    title: 'title',
    description: 'description',
    image: {
      id: 'id',
      thumbnail: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=1920&q=75",
      original: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=1920&q=75",
    },
  }
]

const Banner: React.FC<{ layout: string; variables: any }> = ({
  layout,
  variables,
}) => {
  // const { type, error } = useType(variables.type);
  // if (error) return <ErrorMessage message={error.message} />;
  const Component = MAP_BANNER_TO_GROUP[layout];
  // const Component = MAP_BANNER_TO_GROUP['classic'];
  return (
    // <Component banners={type?.banners} layout={layout} slug={type?.slug} />
    <Component banners={banners} layout={layout} />
  );
};

export default Banner;
