import Image from 'next/image';
import { cleanPill } from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { LandingPayload, ProductsShowcaseSection } from '@/types/strapi';

function getProductFallbackImage(_slugOrName?: string | null): string {
  return STRAPI_IMAGE_PLACEHOLDER;
}

export function ProductsShowcaseBlock({
  section,
  fallbackProducts,
}: {
  section: ProductsShowcaseSection;
  fallbackProducts: LandingPayload['products'];
}) {
  const products =
    section.showAllProducts === false && section.products?.length
      ? section.products
      : section.products?.length
        ? section.products
        : fallbackProducts;

  const featuredProduct = products.find((p) => p.isFeatured) ?? products[0];
  const secondaryProducts = products.filter(
    (p) => p.slug !== featuredProduct?.slug
  );

  return (
    <section className="w-full bg-[#F3F4F6] py-14 md:py-20" id="prod">
      <div className="section-container-90 mx-auto">
        <div className="mb-10 flex flex-col items-center text-center">
          {section.tag ? <span className="section-pill">{cleanPill(section.tag)}</span> : null}
          <h2 className="section-heading mt-3 text-center">
            <span className="block">{section.headingPrefix}</span>
            {section.headingSerif ? (
              <span className="block section-heading-serif">{section.headingSerif}</span>
            ) : null}
          </h2>
          {section.subtitle ? (
            <p className="section-description mt-3 max-w-2xl text-center">{section.subtitle}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {featuredProduct ? (
            (() => {
              const featuredImgUrl =
                getStrapiMediaUrl(featuredProduct.image?.url) ||
                getProductFallbackImage(featuredProduct.slug || featuredProduct.name);
              return (
                <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#f8f9fb] shadow-sm lg:sticky lg:top-4 lg:self-start">
                  <div
                    className="relative min-h-[240px] w-full md:min-h-[300px]"
                    style={
                      featuredProduct.accentGradient
                        ? { background: featuredProduct.accentGradient }
                        : undefined
                    }
                  >
                    {featuredImgUrl ? (
                      <Image
                        src={featuredImgUrl}
                        alt={
                          featuredProduct.image?.alternativeText || featuredProduct.name
                        }
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2.5 p-6 md:p-8">
                    <h4 className="font-[Poppins,sans-serif] text-[21px] font-medium leading-[21px] text-[#001930] lg:text-[21px] lg:leading-[24px]">
                      {featuredProduct.name}
                    </h4>
                    {featuredProduct.tagline ? (
                      <small className="font-[Poppins,sans-serif] text-[13px] font-normal leading-[18px] text-[#666666]">
                        {featuredProduct.tagline}
                      </small>
                    ) : null}
                    <p className="font-[Poppins,sans-serif] text-[14px] font-normal leading-[22px] text-[#343434]">
                      {featuredProduct.description}
                    </p>
                    <WalstarButton
                      variant="compact-blue"
                      className="mt-auto pt-3 !text-[#001930]"
                      arrowWidth={23.37}
                      arrowHeight={17}
                      arrowViewBox="1.5 2.5 13 11"
                      href={`/products/${encodeURIComponent(featuredProduct.slug)}`}
                    >
                      {featuredProduct.ctaLabel || 'Read More'}
                    </WalstarButton>
                  </div>
                </article>
              );
            })()
          ) : null}

          <div className="flex flex-col gap-5">
            {secondaryProducts.map((product) => {
              const mediaUrl =
                getStrapiMediaUrl(product.image?.url) ||
                getProductFallbackImage(product.slug || product.name);
              return (
                <article
                  key={product.documentId || product.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#f8f9fb] shadow-sm sm:min-h-[220px] sm:flex-row"
                >
                  <div
                    className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[225px] sm:w-[220px] rounded-2xl"
                    style={
                      product.accentGradient
                        ? { background: product.accentGradient }
                        : undefined
                    }
                  >
                    {mediaUrl ? (
                      <Image
                        src={mediaUrl}
                        alt={product.image?.alternativeText || product.name}
                        fill
                        sizes="(max-width: 560px) 100vw, 210px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-center gap-1.5 p-5 md:p-6">
                    <h4 className="font-[Poppins,sans-serif] text-[21px] font-medium leading-[21px] text-[#001930] lg:text-[21px] lg:leading-[24px]">
                      {product.name}
                    </h4>
                    {product.tagline ? (
                      <small className="font-[Poppins,sans-serif] text-[13px] font-normal leading-[18px] text-[#666666]">
                        {product.tagline}
                      </small>
                    ) : null}
                    <p className="font-[Poppins,sans-serif] text-[14px] font-normal leading-[22px] text-[#343434]">
                      {product.description}
                    </p>
                    <WalstarButton
                      variant="compact-blue"
                      className="mt-1 !text-[#001930]"
                      arrowWidth={23.37}
                      arrowHeight={17}
                      arrowViewBox="1.5 2.5 13 11"
                      href={`/products/${encodeURIComponent(product.slug)}`}
                    >
                      {product.ctaLabel || 'Read More'}
                    </WalstarButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
