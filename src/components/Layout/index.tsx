import { Header } from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};
type LayoutSubComponent = {
  Content: React.FC<LayoutProps>;
  Sidebar: React.FC<LayoutProps>;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="pt-20 flex flex-col	min-h-screen bg-bg">
      <Header />
      <div className="flex-1 max-w-5xl mx-auto w-full py-4">{children}</div>
    </div>
  );
}

const Content: LayoutSubComponent["Content"] = function ({ children }) {
  return <main className="w-full px-4">{children}</main>;
};

const Sidebar: LayoutSubComponent["Sidebar"] = function ({ children }) {
  return <main className="w-full px-4">{children}</main>;
};

Layout.Content = Content;
Layout.Sidebar = Sidebar;
