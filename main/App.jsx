import React, { useEffect, useState } from 'react';
import { URL_SERVER, URL_LOCALHOST_BACK } from '../math-static/config';
import useHttp from './shared/http';
import './App.css';

export function App() {
	useEffect(() => {
		if (process.env.IS_DEV) {
			window.dev = true;
		}
		window.server = window.dev ? URL_LOCALHOST_BACK : URL_SERVER;
	}, []);

	const { data, error, isLoading, isError, isSuccess } = useHttp(
		'test',
		1000,
	);

	return (
		<div className="p-16 bg-blue">
			AAA
			<h1> TEST </h1>
			{isLoading && <p> LOADING </p>}
			{isError && <p> ERROR </p>}
			{isSuccess && <p> SUCCESS </p>}
		</div>
	);
}
