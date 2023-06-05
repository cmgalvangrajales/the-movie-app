import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { UnorderedListOutlined, HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Menu from "./Menu.styles";

function MenuComponent() {
  const pathname = usePathname();
  const t = useTranslations("Menu");

  const items: MenuProps["items"] = [
    {
      label: <Link href={`/`}>{t("home")}</Link>,
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href={`/mylist`}>{t("mylist")}</Link>,
      key: "/mylist",
      icon: <UnorderedListOutlined />,
    },
  ];

  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default MenuComponent;
