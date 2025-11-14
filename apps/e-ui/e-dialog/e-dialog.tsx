import { Dialog } from '@base-ui-components/react/dialog';
import './index.css';
import './theme.css';

export default function EDialog() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger className={'Button'}>View notifications</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={'Backdrop'} />
          <Dialog.Popup className={'Popup'}>
            <Dialog.Title className={'Title'}>Notifications</Dialog.Title>
            <Dialog.Description className={'Description'}>
              You are all caught up. Good job!
            </Dialog.Description>
            <div className={'Actions'}>
              <Dialog.Close className={'Button'}>Close</Dialog.Close>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
