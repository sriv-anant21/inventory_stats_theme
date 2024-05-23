const appendQueryParamsInEndpoint = (
	endpoint: string,
	params: Record<string, string>
  ): string => {
	return endpoint + "?" + new URLSearchParams(params).toString();
  };

export const GET_Request = () => {
	const apiCall = async (payload: { endpoint: any, params: any }) => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		let endpoint: any = payload.endpoint;
		if (payload.params && Object.keys(payload.params).length) {
			endpoint = appendQueryParamsInEndpoint(payload.endpoint, payload.params);
		  }
		return fetch(endpoint, options)
			.then((response) => {
				return response.text();
			})
			.then((result) => {
				return JSON.parse(result);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	return apiCall;
};

export const POST_Request = () => {
	const apiCall = async (
		payload: { endpoint: string; body: object, params: any },
		{ rejectWithValue }: any,
	) => {
		const options = {
			method: "POST",
			body: JSON.stringify(payload.body),
			headers: {
				"Content-Type": "application/json",
			},
		};
		let endpoint: any = payload.endpoint;
		if (payload.params && Object.keys(payload.params).length) {
			endpoint = appendQueryParamsInEndpoint(payload.endpoint, payload.params);
		  }
		let statusCode: number;
		
		return fetch(endpoint, options)
			.then((response) => {
				
				statusCode = response.status;
				return response.text();
			})
			.then((result: any) => {
				
				if (statusCode >= 200 && statusCode < 300)
					return JSON.parse(result);
				else return rejectWithValue(JSON.parse(result).message??JSON.parse(result).error);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	return apiCall;
};
