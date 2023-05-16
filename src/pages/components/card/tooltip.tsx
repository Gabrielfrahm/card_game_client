import * as Tooltip from "@radix-ui/react-tooltip";
import { TooltipContainer } from "./styles";
import { Card } from ".";

export type typeProps = {
  description: string;
  hover: boolean;
};

export default function TooltipCustom({ description, hover }: typeProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild></Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            <TooltipContainer>
              <p
                style={{
                  color: "#fff",
                }}
              >
                {description}
              </p>
            </TooltipContainer>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
