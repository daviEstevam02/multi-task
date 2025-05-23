import { useCallback, useState } from "react";

interface UseDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function useDisclosure(): UseDisclosureProps {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onOpen, onClose };
}
