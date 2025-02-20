import React, { useEffect, useState } from 'react'
import './carslist.scss'
import { FIltersForm } from '../../components/FIltersForm/FIltersForm.jsx'
import { CarsCard } from '../../components/CarsCard/CarsCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { buildQueryString } from '../../api/query.js'
import { ListingFilter } from '../../components/ListingFilter/ListingFilter.jsx'
import { SmallArrow } from '../../Ui/Arrow/SmallArrow.jsx'

export const CarsList = () => {
	const [page, setPage] = useState(1)
	const [allData, setAllData] = useState([])

	const location = useLocation().search
	const mark = location.split('=')

	const filter = useSelector(state => state.filter.body)

	const d = Object.entries(filter).filter(
		item =>
			typeof item[1] == 'string' ||
			typeof item[1] == 'number' ||
			Array.isArray(item[1])
	)

	const queryToString = buildQueryString(filter)

	const { data, error, reFetch, isLoading, totalCount } = useFetch(
		`https://car-backend-finish.onrender.com/api/cars?populate=*${queryToString}&pagination[page]=${page}&pagination[pageSize]=10`
	)

	// console.log(data, 'data-list')

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)

		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [totalCount, allData, page]) // totalCount, allData, page

	const scrollHandler = async e => {
		const scrollHeight = e.target.documentElement.scrollHeight
		const scrollTop = e.target.documentElement.scrollTop
		const innerHeight = window.innerHeight

		if (
			scrollTop + innerHeight >= scrollHeight - 50 &&
			allData.length < totalCount &&
			page < Math.round(totalCount / 10) + 1
		) {
			setPage(prevPage => prevPage + 1)
		}
	}

	useEffect(() => {
		if (!data) return

		setAllData(prev => (d.length > 0 ? data : [...prev, ...data]))
	}, [data])

	return (
		<div className='cars-list'>
			<div className='cars-list__container'>
				<div className='cars-list-title'>
					<h1>Купить {mark[1]}</h1>
				</div>

				<FIltersForm></FIltersForm>

				<div className='filter-price'>
					<ul>
						<li>до 50 000$</li>
						<li>до 50 000$</li>
						<li>до 50 000$</li>
						<li>до 50 000$</li>
					</ul>
					<SmallArrow rotate='180deg' right='20px'></SmallArrow>
					<SmallArrow right='0'></SmallArrow>
				</div>

				<ListingFilter></ListingFilter>

				<div className='listing-cars-cards'>
					{allData &&
						allData?.map(item => (
							<Link to={`/cars/${item.id}`}>
								<CarsCard key={item.id} item={item?.attributes}></CarsCard>
							</Link>
						))}
				</div>
			</div>
		</div>
	)
}
