import { Button } from "../../ui/button";
import { LikeIcon, LogoIcon, UserIcon } from "../../icons";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <LogoIcon />
      <div className="header__button">
        <Button
          size="Small"
          type="Secondary"
          icon={<UserIcon />}
          text="Владельцам"
        />
        <Button size="Small" type="Secondary" icon={<LikeIcon />} />
      </div>
    </div>
  );
}
