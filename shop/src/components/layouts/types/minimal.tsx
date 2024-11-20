import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import type { HomePageProps } from '@/types';

export default function MinimalLayout({ variables }: HomePageProps) {
  return (
    <>
      <Banner layout="minimal" variableType={variables?.types.type} />
      <Categories layout="minimal" variables={variables?.categories} />
    </>
  );
}
