import { ReactNode } from "react";

import "./title.scss";

export function Title({
  header,
  text,
}: {
  header: string | ReactNode;
  text?: string | ReactNode;
}) {
  return (
    <div className="title">
      <h1 className="title-header">{header}</h1>
      <p className="title-text">{text}</p>
    </div>
  );
}
