import { Hero } from '~/common/components/hero';
import { ProductCard } from '../components/product-card';
import ProductPagination from '~/common/components/product-pagination';
import type { Route } from './+types/category-page';
import { getCategory, getCategoryProductsPages, getProductsByCategory } from '../queries';
import { z } from 'zod';
import { index } from 'drizzle-orm/gel-core';

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `${params.category} | ProductHunt Clone` },
    { name: 'description', content: `Browse ${params.category} products` },
  ];
};

const paramsSchema = z.object({
  category: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || 1;
  const { data, success } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Response('Invalid category', { status: 400 });
  }

  const category = await getCategory({ categoryId: data.category });
  const products = await getProductsByCategory({ categoryId: data.category, page: Number(page) });
  const totalPages = await getCategoryProductsPages({ categoryId: data.category });

  return {
    category,
    products,
    totalPages,
  };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={loaderData.category.name}
        subtitle={loaderData.category.description}
      />

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id}
            productName={product.name}
            productDescription={product.tagline}
            commentsCount={product.reviews}
            viewsCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}
