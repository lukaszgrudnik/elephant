import * as React from 'react';
import { Tooltip } from '@base-ui-components/react/tooltip';
import type { TooltipActions } from './tooltip-actions';
import ArrowIcon from '../icons/arrow-icon';
import UnderlineIcon from '../icons/underline-icon';
import ItalicIcon from '../icons/italic-icon';
import BoldIcon from '../icons/bold-icon';

export default function TextTooltip({
  actions,
}: {
  actions: TooltipActions;
}) {
  return (
    <Tooltip.Provider>
      <div className="flex rounded-md border border-gray-200 bg-gray-50 p-0.5">
        <Tooltip.Root>
          <Tooltip.Trigger
            onClick={() => actions.bold?.()}
            className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-gray-900 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:not-[&:hover]:bg-transparent active:bg-gray-200 data-popup-open:bg-gray-100"
          >
            <BoldIcon
              aria-label="Bold"
              className="size-4"
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex origin-(--transform-origin) flex-col rounded-md bg-[canvas] px-2 py-1 text-sm shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className="flex data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
                  <ArrowIcon />
                </Tooltip.Arrow>
                Bold
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger
            onClick={() => actions.italic?.()}
            className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-gray-900 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:not-[&:hover]:bg-transparent active:bg-gray-200 data-popup-open:bg-gray-100"
          >
            <ItalicIcon
              aria-label="Italic"
              className="size-4"
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex origin-(--transform-origin) flex-col rounded-md bg-[canvas] px-2 py-1 text-sm shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className="flex data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
                  <ArrowIcon />
                </Tooltip.Arrow>
                Italic
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger
            onClick={() => actions.underline?.()}
            className="flex size-8 items-center justify-center rounded-sm border-0 bg-transparent text-gray-900 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:not-[&:hover]:bg-transparent active:bg-gray-200 data-popup-open:bg-gray-100"
          >
            <UnderlineIcon
              aria-label="Underline"
              className="size-4"
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex origin-(--transform-origin) flex-col rounded-md bg-[canvas] px-2 py-1 text-sm shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className="flex data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0 data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
                  <ArrowIcon />
                </Tooltip.Arrow>
                Underline
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}
