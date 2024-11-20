import { useType } from '@/framework/type';
import dynamic from 'next/dynamic';
import type { Banner, Slug } from '@/types';
import { ComponentType } from 'react';

export interface BannerProps {
  banners?: Banner[] | null;
  layout?: string;
  slug?: Slug;
}

const ErrorMessage = dynamic(() => import('@/components/ui/error-message'));
const BannerWithSearch = dynamic(
  () => import('@/components/banners/banner-with-search')
);
const BannerShort = dynamic(() => import('@/components/banners/banner-short'));
const BannerWithoutSlider = dynamic(
  () => import('@/components/banners/banner-without-slider')
);
const BannerWithPagination = dynamic(
  () => import('@/components/banners/banner-with-pagination')
);

const MAP_BANNER_TO_GROUP: Record<string, ComponentType<BannerProps>> = {
  classic: BannerWithSearch,
  minimal: BannerWithoutSlider,
  modern: BannerShort,
  standard: BannerWithSearch,
  compact: BannerWithPagination,
  default: BannerWithSearch,
};

interface ParentBannerProps {
  layout: string;
  variableType: string;
}

const Banner = ({ layout, variableType }: ParentBannerProps) => {
  const { type, error } = useType(variableType);

  console.log({ layout, variableType, type, error });

  if (error) return <ErrorMessage message={error.message} />;

  const Component = MAP_BANNER_TO_GROUP[layout];

  return (
    <Component banners={type?.banners} layout={layout} slug={type?.slug} />
  );
};

export default Banner;
