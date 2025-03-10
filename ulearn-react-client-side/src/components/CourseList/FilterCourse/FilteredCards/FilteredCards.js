import { Avatar, Pagination, Rate, Result, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { RiClosedCaptioningFill } from 'react-icons/ri';
import { TbExternalLink } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../layout/Loading/Loading';

const FilteredCards = () => {
	const [courseList, setCourseList] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		setIsFetching(true);
		axios
			.get('/courses')
			.then((response) => {
				//console.log(response.data.courses);
				setCourseList(response.data.courses);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, []);
	//pagination
	const [current, setCurrent] = useState(1);
	const [value, setValue] = useState(5);
	const navigate = useNavigate();
	const onChange = (page) => {
		console.log(page);
		setCurrent(page);
	};

	return (
		<section className='p-4 '>
			{isFetching ? (
				<div className='flex justify-center items-center w-full min-h-[40vh]'>
					<Loading />
				</div>
			) : (
				<>
					{!courseList.length ? (
						<Result
							status='500'
							title='500'
							subTitle='Sorry, something went wrong.'
							extra={
								<Link to={'/'}>
									<button className='bg-primary px-4 py-2 text-white rounded-lg'>
										Back home
									</button>
								</Link>
							}
						/>
					) : (
						<>
							<div className=''>
								{courseList.map((category) => {
									const {
										courseThumb,
										courseTitle,
										courseShortDesc,
										coursePrice,
										avatar,
										lecture,
										time,
										level,
										averageRating,
										language,
										_id,
									} = category;
									return (
										<div
											key={_id}
											className='  rounded-lg grid grid-cols-9  '
										>
											{/* ----------------------card image--------------------------- */}
											<div className=' col-span-2 py-[10px] pl-[10px]'>
												<img
													src={
														courseThumb || 'missing'
													}
													alt='course'
													className='rounded-xl object-cover w-full'
												/>
											</div>
											{/* ----------------------card body--------------------------- */}
											<article className='py-[10px] px-[20px] col-span-4 '>
												{/* ----------------------card title--------------------------- */}
												<h2 className='card-title text-base font-semibold text-dark whitespace-nowrap'>
													{courseTitle}
												</h2>
												<h3 className='text-[13px]  capitalize text-font2 whitespace-nowrap'>
													{courseShortDesc}
												</h3>
												{/* ----------------------icons--------------------------- */}
												<div className='flex space-x-4 items-center'>
													<p className='flex items-center'>
														<BsFillPlayCircleFill className='inline-block text-base mr-2 text-font2' />
														<span className='text-sm'>
															{lecture}
															lessons
														</span>
													</p>
													<p className='flex items-center'>
														<BiTimeFive className='inline-block text-base mr-2 text-font2' />
														<span className='text-sm'>
															{time
																? time
																: '01:10:09'}{' '}
															Hours
														</span>
													</p>
													<p className='flex items-center'>
														<RiClosedCaptioningFill className='inline-block text-base mr-2 text-font2' />
														<span className='text-sm'>
															{language}
														</span>
													</p>
												</div>
												{/*------------------------- status and view-------------------- */}
												<div className='flex items-center space-x-6'>
													<p className='text-[13px]  capitalize bg-primary text-white py-1  px-4 rounded-md'>
														{level}
													</p>
													<div className='mb-3'>
														<button
															onClick={() =>
																navigate(
																	`/course-list/${_id}`
																)
															}
															className='text-[13px] capitalize  bg-blue-100 hover:bg-primary text-primary hover:text-white py-1 px-4  rounded-md  font-medium '
														>
															<TbExternalLink className='text-base mr-2  inline-block' />{' '}
															view
														</button>
													</div>
												</div>
												{/*------------------------- avatar-------------------- */}
												<div className=''>
													<Avatar.Group>
														<Avatar
															src={
																avatar
																	? avatar
																	: 'https://i.ibb.co/FK6MgkL/0269091217f95c25ac4f77c1bd69879a.jpg'
															}
														/>
													</Avatar.Group>
												</div>
											</article>
											{/*----------------------------card footer---------------------------*/}
											<article className='col-span-3 pt-[10px] pb-[15px] px-[25px] flex flex-col justify-end items-end'>
												{/* -------------------------$course price---------------------------- */}
												<p className='font-semibold  text-lg text-black'>
													{coursePrice}
												</p>
												{/* ------------------------rating-------------------- */}
												<div>
													<span>
														<Rate
															onChange={setValue}
															value={value}
														/>
														{value ? (
															<span className='ant-rate-text'>
																{value}
															</span>
														) : (
															''
														)}
													</span>
												</div>
												<p className='text-[13px]'>
													{averageRating} Ratings
												</p>
											</article>
										</div>
									);
								})}
							</div>
							{/*-------------------------pagination-------------------------*/}
							<div className='mt-16'>
								<Pagination
									current={current}
									onChange={onChange}
									total={200 / 10}
								/>
							</div>
						</>
					)}
				</>
			)}
		</section>
	);
};

export default FilteredCards;
