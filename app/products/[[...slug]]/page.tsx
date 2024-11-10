interface PageParams {
  slug: string[] | undefined;
}

interface SearchParams {
  sortOrder?: string;
}

interface Props {
  params: PageParams;
  searchParams: SearchParams;
}

export default async function ProductPage({ params, searchParams }: Props) {
  const slug = params.slug || [];
  const sortOrder = searchParams.sortOrder;

  await Promise.resolve(); // Satisfy the Promise requirement

  return (
    <div>
      Product Page: {slug.join("/")} - Sort Order: {sortOrder}
    </div>
  );
}
