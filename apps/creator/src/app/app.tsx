import {
  Button,
  Input,
} from '@base-ui-components/react';
import './app.scss';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import RichTextEditor from './rich-text-editor/rich-text-editor';
import TextTooltip from './text-tooltip/text-tooltip';
import type { TooltipActions } from './text-tooltip/tooltip-actions';
import PlusIcon from './icons/plus-icon';

export default function App() {
  const [drafts, setDrafts] = useState<
    { term: string; definition: string }[]
  >([{ term: '', definition: '' }]);

  const bottomRef =
    useRef<HTMLInputElement>(null);

  const addDraft = () => {
    setDrafts([
      ...drafts,
      { term: '', definition: '' },
    ]);
  };

  useEffect(() => {
    // scroll AFTER React has rendered the new draft
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [drafts]);

  const actions: TooltipActions = {
    bold: undefined,
    italic: undefined,
    underline: undefined,
  };

  return (
    <div
      className={
        'mb-20 flex flex-col items-center justify-center gap-5 p-3'
      }
    >
      <div className={'w-full'}>
        {drafts.map((item, index) => (
          <div
            key={index}
            className={
              'flex w-full flex-col gap-2 p-2 shadow-2xs'
            }
          >
            <Input
              placeholder="Term"
              className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
            />
            <RichTextEditor actions={actions} />
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div
        className={
          'fixed bottom-0 grid w-full grid-cols-3 grid-rows-1 justify-center justify-items-center gap-4 bg-sky-200 p-5'
        }
      >
        <div></div>
        <div>
          <Button
            onClick={() => addDraft()}
            className="font-inherit m-0 flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base leading-6 font-medium text-gray-900 outline-0 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:border-t-gray-300 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] data-[disabled]:text-gray-500 hover:data-[disabled]:bg-gray-50 active:data-[disabled]:border-t-gray-200 active:data-[disabled]:bg-gray-50 active:data-[disabled]:shadow-none"
          >
            <PlusIcon />
          </Button>
        </div>
        <div>
          <TextTooltip actions={actions} />
        </div>
      </div>
    </div>
  );
}
