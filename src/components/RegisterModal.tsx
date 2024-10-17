import * as Dialog from '@radix-ui/react-dialog';

const RegisterModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-black text-white rounded-lg p-2 py-1">
          Register
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md w-full p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-semibold">
            Register
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-2xl  text-neutral-600">
            In order to register you must receive an invitation.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RegisterModal;
