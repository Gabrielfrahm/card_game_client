import * as Tooltip from "@radix-ui/react-tooltip";
import { TextError, TooltipContainer, TooltipIcon } from "./styles";

type TooltipCustomProps = {
  error: string;
};

export default function TooltipCustom({ error }: TooltipCustomProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <TooltipIcon size={20} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            <TooltipContainer>
              <TextError>{error}</TextError>
            </TooltipContainer>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
