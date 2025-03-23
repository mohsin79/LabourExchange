import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import CreateProfile from "../../pages/CreateProfile";
import GoogleMapsRedirect from "../../pages/Search";

const UserView = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="createProfile" element={<CreateProfile />} />
        <Route path="search" element={<GoogleMapsRedirect />} />
        {/* <Route path="profile" element={<Profile />} />
        <Route path="configurator" element={<Configurator />} />
        <Route path="margin" element={<Margin />} />
        <Route path="audit_trail" element={<AuditTrail />} />
        <Route path="profileDetails/:id" element={<ProfileDetails />} />
        <Route path="marginDetails/:id" element={<MarginDetails />} />
        <Route path="/createProfile/:id" element={<CreateProfile />} />
        <Route path="notifications" element={<AllNotifications />} />
        <Route path="roles_and_permissions" element={<RolesAndPermissions />} />
        <Route
          path="permissions/:name"
          element={<RoleDetailsAndAddNewLayout />}
        />
        <Route path="userManagement" element={<UserManagement />} /> */}
        <Route path="/" element={<Navigate replace to="home" />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default UserView;
