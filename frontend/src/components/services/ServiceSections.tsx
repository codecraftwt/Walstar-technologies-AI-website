/* Re-exports modular reusable Service sections, icons, and helpers for backward compatibility. */
export * from './ServiceIcons';
export * from './serviceVariants';
export { renderTextWithBreaks } from '@/components/common/SectionPrimitives';
export { SvcIntroBlock } from './SvcIntroSection';
export { SvcChallengesBlock } from './SvcChallengesSection';
export { SvcCapabilitiesBlock } from './SvcCapabilitiesSection';
export { SvcBenefitsBlock } from './SvcBenefitsSection';
export { SvcProcessBlock } from './SvcProcessSection';
export { SvcApproachBlock } from './SvcApproachSection';
export { SvcCtaBlock } from './SvcCtaSection';
export { ServiceGrid, SERVICE_GRID_CARDS } from './ServiceGrid';
export { CapabilitiesBlock, WWD_CARDS } from '@/components/home/CapabilitiesSection';

/* Legacy Service 3 aliases */
export { SvcIntroBlock as Svc3IntroBlock } from './SvcIntroSection';
export { SvcCapabilitiesBlock as Svc3StrategiesBlock } from './SvcCapabilitiesSection';
export { SvcBenefitsBlock as Svc3BenefitsBlock } from './SvcBenefitsSection';
export { SvcProcessBlock as Svc3ProcessBlock } from './SvcProcessSection';
export { SvcApproachBlock as Svc3GrowthStrategyBlock } from './SvcApproachSection';
export { SvcCtaBlock as Svc3CtaBlock } from './SvcCtaSection';
