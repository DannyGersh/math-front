import { useEffect, useState } from 'react';
import axios from 'axios';
import { isEmpty } from './helper';

export default function useHttp(endpoint = '', delay = 0) {
	const [outData, setOutData] = useState({});
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const tempEndpoint = `${endpoint[0] !== '/' && '/'}${endpoint}`;

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(window.server + tempEndpoint)
				.then((response) => {
					setOutData(response);
				})
				.catch((fetchError) => {
					setError(fetchError);
				})
				.finally(() => setIsLoading(false));
		}, delay);
	}, []);

	return {
		data: outData,
		error,
		isLoading,
		isError: !isEmpty(error) && !isLoading,
		isSuccess: isEmpty(error) && !isLoading,
	};
}
