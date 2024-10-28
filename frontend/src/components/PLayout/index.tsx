import React, { useEffect } from "react";
import { Layout, Menu, Typography, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hook/useUser";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

type AdminLayoutProps = {
  authProtected?: boolean;
};

const MainLayout = ({
  children,
}: React.PropsWithChildren<AdminLayoutProps>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = true;
  const userRole = "Admin";
  //   const { isAuthenticated, userRole, logout } = useUser(); // Include logout function from useUser

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/login");
  //   };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Welcome, {userRole}
          </Title>
          <Button type="primary">Logout</Button>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
