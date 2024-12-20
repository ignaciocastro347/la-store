import BakeryCategoryLoader from '@/components/ui/loaders/bakery-categories-loader';
import NotFound from '@/components/ui/not-found';
import SectionBlock from '@/components/ui/section-block';
import SolidCardCategory from '@/components/categories/solid-card-category';
import type { Category } from '@/types';

interface SlidingCardCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  title?: string;
}

const SlidingCardCategories: React.FC<SlidingCardCategoriesProps> = ({
  notFound,
  categories,
  loading,
  title,
}) => {
  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="mt-8 flex h-52 w-full justify-center px-2">
          <BakeryCategoryLoader />
        </div>
      </div>
    );
  }
  return (
    <SectionBlock title={title}>
      {!notFound ? (
        <SolidCardCategory items={categories} className="py-8" />
      ) : (
        <div className="min-h-full">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      )}
    </SectionBlock>
  );
};

export default SlidingCardCategories;
