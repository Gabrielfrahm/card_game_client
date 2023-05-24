import * as Tooltip from "@radix-ui/react-tooltip";
import Battle from "../../../../../assets/battle.png";

import {
  MiniCard,
  MiniCardImage,
  MiniCardName,
  MiniCardPower,
  ToolTipImage,
  TooltipContainer,
} from "./styles";
import { ICard } from "@/@shared/interfaces";

type tooltipProps = {
  cardProps: ICard;
  onClick: () => void;
};

export default function TooltipCustom({ cardProps, onClick }: tooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <MiniCard
            onClick={onClick}
            key={cardProps.id}
            effect={cardProps.effect as any}
            style={{
              margin: "15px 5px 0 0",
            }}
          >
            <MiniCardPower>
              <MiniCardImage
                src={Battle.src}
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                width={50}
                height={50}
                alt=""
              />
              <p>{cardProps.atk}</p>
            </MiniCardPower>
            <MiniCardName>
              <p>{cardProps.name}</p>
            </MiniCardName>
          </MiniCard>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right">
            <TooltipContainer>
              <ToolTipImage
                src={cardProps.image_url}
                sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                width={200}
                height={300}
                quality={100}
                priority
                alt="border"
              />
            </TooltipContainer>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
