import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CourseList from './pages/CourseList/CourseList';
import AdminDashboardHome from './dashboards/AdminDashboard/AdminDashboardHome/AdminDashboardHome';
import Auth from './pages/Auth/Auth';
import DevelopmentCourse from './components/Courses/DevelopmentCourse/DevelopmentCourse';
import BusinessCourse from './components/Courses/BusinessCourse/BusinessCourse';
import SoftwareCourse from './components/Courses/SoftwareCourse/SoftwareCourse';
import DesignCourse from './components/Courses/DesignCourse/DesignCourse';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import AuthRoles from './components/Auth/AuthRoles';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path='home' element={<Home />}>
					<Route path='development' element={<DevelopmentCourse />} />
					<Route path='business' element={<BusinessCourse />} />
					<Route path='software' element={<SoftwareCourse />} />
					<Route path='design' element={<DesignCourse />} />
				</Route>
				<Route path='course-list' element={<CourseList />} />
				<Route path='auth/*' element={<Auth />} />
				<Route
					path='admin/dashboard'
					element={<AdminDashboardHome />}
				/>
			</Routes>
		</>
	);
}

export default App;
