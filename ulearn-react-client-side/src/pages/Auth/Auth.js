import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AuthRoles from '../../components/Auth/AuthRoles';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';

const Auth = () => {
	return (
    <>
		<Routes>
			<Route index element={<AuthRoles />} />
			<Route path='auth/login' element={<Login />} />
			<Route path='register/:role' element={<Register />} />
		</Routes>
    <Outlet />
    </>
	);
};

export default Auth;
