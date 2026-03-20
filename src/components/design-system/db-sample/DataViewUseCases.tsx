import Carousel from "../Carousel";
import { useCopy } from "../../../i18n";

interface DataViewUseCasesProps {
  className?: string;
}

export default function DataViewUseCases({ className }: DataViewUseCasesProps) {
  const copy = useCopy();
  const { useCases } = copy.home.featureBento.databaseViews;

  return <Carousel items={useCases} className={className} dotsLabel={copy.common.carousel.dotsLabel} />;
}
