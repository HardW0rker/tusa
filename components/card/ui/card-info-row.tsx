import { ReactNode } from "react";

export function CardInfoRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="card-info-row__container">
      {icon}
      {children}
    </div>
  );
}
