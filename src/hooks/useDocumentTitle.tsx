import { useEffect, useState } from "react";

export const useDocumentTitle = (title: string): void => {
  const [documentTitle] = useState(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
};
